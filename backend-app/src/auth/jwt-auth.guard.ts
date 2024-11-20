import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Logger } from '@nestjs/common';
import * as jwksClient from 'jwks-rsa';
import { JwtService } from '@nestjs/jwt';
import { promisify } from 'util';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    this.logger.log('Inside JwtAuthGuard activation');
    
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    this.logger.error(request.headers);

    if (!authHeader) {
      this.logger.error('Authorization header missing');
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1]; // Extract the token
    if (!token) {
      this.logger.error('Token missing in Authorization header');
      throw new UnauthorizedException('Token missing in Authorization header');
    }

    try {
      // Decode the token header to get the `kid` (Key ID)
      const decodedHeader = JSON.parse(
        Buffer.from(token.split('.')[0], 'base64').toString()
      );

      const client = jwksClient({
        jwksUri: `https://login.microsoftonline.com/${process.env.TENANT_ID}/discovery/keys`,
      });

      // Fetch the signing key
      const getSigningKey = promisify(client.getSigningKey);
      const key = await getSigningKey(decodedHeader.kid);
      const signingKey = key.getPublicKey();

      // Validate the token using the public key
      const payload = new JwtService({}).verify(token, {
        secret: signingKey,
        algorithms: ['RS256'], // Ensure the algorithm matches
      });

      // Attach user payload to the request
      request.user = payload;
      this.logger.log('Token validated successfully', payload);

      return true;
    } catch (error) {
      this.logger.error('Token validation failed', error.stack);
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}

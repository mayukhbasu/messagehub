import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksClient from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: async (req, rawJwtToken, done) => {
        const client = jwksClient({
          jwksUri: `https://login.microsoftonline.com/${process.env.TENANT_ID}/discovery/v2.0/keys`,
        });

        const decoded = JSON.parse(Buffer.from(rawJwtToken.split('.')[1], 'base64').toString('utf8'));
        const key = await client.getSigningKey(decoded.kid);
        done(null, key.getPublicKey());
      },
      audience: process.env.CLIENT_ID,
      issuer: `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0`,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email }; // Customize based on token claims
  }
}

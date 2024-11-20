import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-openidconnect';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OidcStrategy extends PassportStrategy(Strategy, 'oidc') {
  constructor(private readonly configService: ConfigService) {
    super({
      issuer: `https://login.microsoftonline.com/${configService.get(
        'TENANT_ID',
      )}/v2.0`,
      authorizationURL: `https://login.microsoftonline.com/${configService.get(
        'TENANT_ID',
      )}/oauth2/v2.0/authorize`,
      tokenURL: `https://login.microsoftonline.com/${configService.get(
        'TENANT_ID',
      )}/oauth2/v2.0/token`,
      clientID: configService.get('CLIENT_ID'),
      clientSecret: configService.get('CLIENT_SECRET'),
      callbackURL: configService.get('REDIRECT_URI'),
      scope: ['openid', 'profile', 'email'],
    });
  }

  async validate(tokens: any, profile: any): Promise<any> {
    return { tokens, profile };
  }
}

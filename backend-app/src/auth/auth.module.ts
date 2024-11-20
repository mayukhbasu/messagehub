import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { OidcStrategy } from './oidc.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your-secret-key', // Replace with a strong secret or use environment variables
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [JwtStrategy, OidcStrategy, AuthService],
  controllers: [AuthController],
  exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}

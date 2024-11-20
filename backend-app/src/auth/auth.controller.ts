import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(AuthGuard('oidc'))
  login(): void {
    // Trigger Azure AD login
  }

  @Get('callback')
  @UseGuards(AuthGuard('oidc'))
  async callback(@Req() req): Promise<any> {
    return req.user; // Return the authenticated user
  }

  
}

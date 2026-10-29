import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LocalAuthGuard } from './passport/local-auth.guard.js';
import { JwtAuthGuard } from './passport/jwt-auth.guard.js';
import { Public } from '@/decorator/customize.js';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
   

  ) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @Public()
  async login(@Request() req: any) {
    return this.authService.login(req.user)
  }
}

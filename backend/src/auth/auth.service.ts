import { comparePasswordHelper } from '@/common/helpers/password.helper.js';
import { UsersService } from '@/modules/users/users.service.js';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService { 
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const isPasswordValid = await comparePasswordHelper(pass, user.passwordHash);
    if (!isPasswordValid) return null;
    return user
  }
  
  async login(user: any) {
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

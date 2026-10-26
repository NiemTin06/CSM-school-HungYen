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

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Email hoặc mật khẩu không chính xác');
    }
    const isPasswordValid = await comparePasswordHelper(pass, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Email hoặc mật khẩu không chính xác');
    }
    const payload = {sub: user._id, username: user.email};
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}

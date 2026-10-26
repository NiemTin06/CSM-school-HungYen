// src/users/dto/user-forgot-password.dto.ts
import { PickType } from '@nestjs/mapped-types';
import { AdminCreateUserDto } from './admin-create-user.dto.js';

export class UserForgotPasswordDto extends PickType(AdminCreateUserDto, [
  'email',
] as const) {}
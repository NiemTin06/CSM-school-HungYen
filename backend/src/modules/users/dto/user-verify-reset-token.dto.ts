// src/users/dto/verify-reset-token.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyResetTokenDto {
  @IsString({ message: 'Token xác thực phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Token không được để trống' })
  token: string;
}
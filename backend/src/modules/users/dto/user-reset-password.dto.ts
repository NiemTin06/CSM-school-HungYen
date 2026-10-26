import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserResetPasswordDto {
  @IsString({ message: 'Token xác thực phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Token xác thực không được để trống' })
  token: string;

  @IsString({ message: 'Mật khẩu mới phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Mật khẩu mới không được để trống' })
  @MinLength(8, { message: 'Mật khẩu mới phải có ít nhất 8 ký tự' })
  newPassword: string;
}
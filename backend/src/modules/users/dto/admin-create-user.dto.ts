import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../schemas/user.schema.js';


export class AdminCreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password không được để trống' })
  @MinLength(8, {
    message: 'Password phải có ít nhất 8 ký tự',
  })
  password: string;

  @IsEnum(UserRole, {
    message: 'Role phải là admin hoặc editor ',
  })
  role: UserRole;
}
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AdminCreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;
  
  @IsString()
  @MinLength(8)
  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  @IsMongoId({
    message: 'role_id phải là MongoDB ObjectId hợp lệ',
  })

  @IsOptional()
  role_id?: string | null;
}
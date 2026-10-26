import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsOptional,
} from 'class-validator';
import { UserRole } from '../schemas/user.schema.js';

export class AdminBulkUpdateUsersDto {
  @IsArray({ message: 'ids phải là một mảng danh sách' })
  @ArrayNotEmpty({ message: 'Danh sách ids không được để trống' })
  @IsMongoId({
    each: true,
    message: 'Mỗi id trong danh sách phải là MongoDB ObjectId hợp lệ',
  })
  ids: string[];

  @IsOptional()
  @IsBoolean({ message: 'isActive phải là boolean (true/false)' })
  isActive?: boolean;

  @IsOptional()
  @IsEnum(UserRole, { message: 'Role phải là admin hoặc editor' })
  role?: UserRole;
}
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsMongoId,
  IsOptional,
} from 'class-validator';

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
  @IsMongoId({ message: 'role_id phải là MongoDB ObjectId hợp lệ' })
  role_id?: string;
}
import { ArrayNotEmpty, IsArray, IsMongoId } from 'class-validator';

export class AdminBulkDeleteUsersDto {
  @IsArray({ message: 'ids phải là một mảng danh sách' })
  @ArrayNotEmpty({ message: 'Danh sách ids không được để trống' })
  @IsMongoId({
    each: true,
    message: 'Mỗi id trong danh sách phải là MongoDB ObjectId hợp lệ',
  })
  ids: string[];
}
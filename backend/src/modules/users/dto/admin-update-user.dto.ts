import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { AdminCreateUserDto } from './admin-create-user.dto.js';
import { Transform } from 'class-transformer';

export class AdminUpdateUserDto extends PartialType(
  OmitType(AdminCreateUserDto, ['email'] as const),
) {
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true' || value === true || value === 1 || value === '1') return true;
    if (value === 'false' || value === false || value === 0 || value === '0') return false;
    return value;
  })
  @IsBoolean({ message: 'isActive phải là giá trị boolean ' })
  isActive?: boolean;
}
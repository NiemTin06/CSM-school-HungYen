import { PickType } from '@nestjs/mapped-types';
import { AdminCreateUserDto } from './admin-create-user.dto.js';


export class UserUpdateNameDto extends PickType(AdminCreateUserDto, [
  'name',
] as const) {}
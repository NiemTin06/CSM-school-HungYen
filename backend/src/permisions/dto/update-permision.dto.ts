import { PartialType } from '@nestjs/mapped-types';
import { CreatePermisionDto } from './create-permision.dto.js';

export class UpdatePermisionDto extends PartialType(CreatePermisionDto) {}

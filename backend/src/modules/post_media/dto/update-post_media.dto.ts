import { PartialType } from '@nestjs/mapped-types';
import { CreatePostMediaDto } from './create-post_media.dto.js';

export class UpdatePostMediaDto extends PartialType(CreatePostMediaDto) {}

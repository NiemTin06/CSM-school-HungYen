import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumMediaDto } from './create-album_media.dto.js';

export class UpdateAlbumMediaDto extends PartialType(CreateAlbumMediaDto) {}

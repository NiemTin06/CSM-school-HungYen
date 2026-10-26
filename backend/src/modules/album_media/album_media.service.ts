import { Injectable } from '@nestjs/common';
import { CreateAlbumMediaDto } from './dto/create-album_media.dto.js';
import { UpdateAlbumMediaDto } from './dto/update-album_media.dto.js';

@Injectable()
export class AlbumMediaService {
  create(createAlbumMediaDto: CreateAlbumMediaDto) {
    return 'This action adds a new albumMedia';
  }

  findAll() {
    return `This action returns all albumMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} albumMedia`;
  }

  update(id: number, updateAlbumMediaDto: UpdateAlbumMediaDto) {
    return `This action updates a #${id} albumMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} albumMedia`;
  }
}

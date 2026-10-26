import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlbumMediaService } from './album_media.service.js';
import { CreateAlbumMediaDto } from './dto/create-album_media.dto.js';
import { UpdateAlbumMediaDto } from './dto/update-album_media.dto.js';

@Controller('album-media')
export class AlbumMediaController {
  constructor(private readonly albumMediaService: AlbumMediaService) {}

  @Post()
  create(@Body() createAlbumMediaDto: CreateAlbumMediaDto) {
    return this.albumMediaService.create(createAlbumMediaDto);
  }

  @Get()
  findAll() {
    return this.albumMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumMediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlbumMediaDto: UpdateAlbumMediaDto) {
    return this.albumMediaService.update(+id, updateAlbumMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumMediaService.remove(+id);
  }
}

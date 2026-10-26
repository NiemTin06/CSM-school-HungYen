import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service.js';
import { AlbumsController } from './albums.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, AlbumSchema } from './schemas/album.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Album.name, schema: AlbumSchema }])], 
  controllers: [AlbumsController],
  providers: [AlbumsService],
})
export class AlbumsModule {}

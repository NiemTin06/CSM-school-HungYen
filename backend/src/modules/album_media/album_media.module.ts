import { Module } from '@nestjs/common';
import { AlbumMediaService } from './album_media.service.js';
import { AlbumMediaController } from './album_media.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumMedia, AlbumMediaSchema } from './schemas/album_media.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: AlbumMedia.name, schema: AlbumMediaSchema }])], 
  controllers: [AlbumMediaController],
  providers: [AlbumMediaService],
})
export class AlbumMediaModule {}

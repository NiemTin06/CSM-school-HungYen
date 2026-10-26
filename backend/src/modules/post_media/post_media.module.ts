import { Module } from '@nestjs/common';
import { PostMediaService } from './post_media.service.js';
import { PostMediaController } from './post_media.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { PostMedia, PostMediaSchema } from './entities/post_media.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: PostMedia.name, schema: {PostMediaSchema} }])], 
  controllers: [PostMediaController],
  providers: [PostMediaService],
})
export class PostMediaModule {}

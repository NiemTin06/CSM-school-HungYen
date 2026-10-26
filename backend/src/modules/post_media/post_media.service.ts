import { Injectable } from '@nestjs/common';
import { CreatePostMediaDto } from './dto/create-post_media.dto.js';
import { UpdatePostMediaDto } from './dto/update-post_media.dto.js';

@Injectable()
export class PostMediaService {
  create(createPostMediaDto: CreatePostMediaDto) {
    return 'This action adds a new postMedia';
  }

  findAll() {
    return `This action returns all postMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postMedia`;
  }

  update(id: number, updatePostMediaDto: UpdatePostMediaDto) {
    return `This action updates a #${id} postMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} postMedia`;
  }
}

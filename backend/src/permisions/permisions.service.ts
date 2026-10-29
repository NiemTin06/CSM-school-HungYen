import { Injectable } from '@nestjs/common';
import { CreatePermisionDto } from './dto/create-permision.dto.js';
import { UpdatePermisionDto } from './dto/update-permision.dto.js';

@Injectable()
export class PermisionsService {
  create(createPermisionDto: CreatePermisionDto) {
    return 'This action adds a new permision';
  }

  findAll() {
    return `This action returns all permisions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permision`;
  }

  update(id: number, updatePermisionDto: UpdatePermisionDto) {
    return `This action updates a #${id} permision`;
  }

  remove(id: number) {
    return `This action removes a #${id} permision`;
  }
}

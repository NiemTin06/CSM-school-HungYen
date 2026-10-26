// src/common/pipes/parse-object-id.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<string, string> {
  transform(value: string): string {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`ID không đúng định dạng MongoDB ObjectId: ${value}`);
    }
    return value;
  }
}
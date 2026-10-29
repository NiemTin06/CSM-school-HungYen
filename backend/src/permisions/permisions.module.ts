import { Module } from '@nestjs/common';
import { PermisionsService } from './permisions.service.js';
import { PermisionsController } from './permisions.controller.js';

@Module({
  controllers: [PermisionsController],
  providers: [PermisionsService],
})
export class PermisionsModule {}

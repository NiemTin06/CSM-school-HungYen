import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service.js';
import { DepartmentsController } from './departments.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from './schemas/department.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Department.name, schema: DepartmentSchema }])], 
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}

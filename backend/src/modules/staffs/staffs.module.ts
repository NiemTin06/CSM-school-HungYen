import { Module } from '@nestjs/common';
import { StaffsService } from './staffs.service.js';
import { StaffsController } from './staffs.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from './schemas/staff.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Staff.name, schema: StaffSchema }])], 
  controllers: [StaffsController],
  providers: [StaffsService],
})
export class StaffsModule {}

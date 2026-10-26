import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CategoriesController } from './categories.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schemas/category.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}

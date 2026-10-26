
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true, collection: 'categories' })
export class Category {
  @Prop({ required: true, trim: true, maxlength: 120 })
  name: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  slug: string;

  @Prop({ trim: true, default: '' })
  description: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Category',
    default: null,
  })
  parentId: Types.ObjectId | null;

  @Prop({ type: Number, default: 0, index: true })
  sortOrder: number;

  @Prop({ type: Boolean, default: true, index: true })
  isActive: boolean;
}

export const CategorySchema =
  SchemaFactory.createForClass(Category);

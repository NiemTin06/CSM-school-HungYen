
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type StaffDocument = HydratedDocument<Staff>;

@Schema({ timestamps: true })
export class Staff {
  @Prop({ required: true, trim: true })
  fullName: string;

  @Prop({ trim: true, lowercase: true })
  slug?: string;

  @Prop({ default: '' })
  position: string;

  @Prop({ type: Types.ObjectId, ref: 'Department', default: null })
  departmentId: Types.ObjectId | null;

  @Prop({ type: Types.ObjectId, ref: 'Media', default: null })
  avatarId: Types.ObjectId | null;

  @Prop({ default: '' })
  bio: string;

  @Prop({ default: '' })
  qualifications: string;

  @Prop({ default: 0 })
  sortOrder: number;

  @Prop({ default: true })
  isPublic: boolean;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);

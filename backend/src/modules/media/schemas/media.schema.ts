
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MediaDocument = HydratedDocument<Media>;

@Schema({ timestamps: true, collection: 'media' })
export class Media {
  @Prop({ required: true, trim: true })
  filename: string;

  @Prop({ required: true, unique: true, trim: true })
  storageKey: string;

  @Prop({ required: true, trim: true })
  url: string;

  @Prop({ required: true, trim: true })
  mimeType: string;

  @Prop({ required: true, type: Number, min: 0 })
  size: number;

  @Prop({ trim: true, default: '' })
  altText: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  uploadedBy: Types.ObjectId;
}

export const MediaSchema = SchemaFactory.createForClass(Media);

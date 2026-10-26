
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

export enum AlbumStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

@Schema({ timestamps: true, collection: 'albums' })
export class Album {
  @Prop({ required: true, trim: true, maxlength: 250 })
  title: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  slug: string;

  @Prop({ trim: true, default: '' })
  description: string;

  // Ảnh bìa album
  @Prop({ type: Types.ObjectId, ref: 'Media', default: null })
  coverMediaId: Types.ObjectId | null;

  @Prop({
    required: true,
    enum: AlbumStatus,
    default: AlbumStatus.DRAFT,
    index: true,
  })
  status: AlbumStatus;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);

AlbumSchema.index({ status: 1, createdAt: -1 });

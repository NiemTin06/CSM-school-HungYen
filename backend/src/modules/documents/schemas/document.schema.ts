
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type DocumentDocument = HydratedDocument<Document>;

export enum DocumentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Schema({ timestamps: true })
export class Document {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  slug: string;

  @Prop({ default: '' })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Media', required: true })
  mediaId: Types.ObjectId;

  @Prop({ default: 'other' })
  categoryName: string;

  @Prop({
    type: String,
    enum: Object.values(DocumentStatus),
    default: DocumentStatus.DRAFT,
  })
  status: DocumentStatus;

  @Prop({ type: Date, default: null })
  publishedAt: Date | null;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  authorId: Types.ObjectId;
}

export const DocumentSchema =
  SchemaFactory.createForClass(Document);

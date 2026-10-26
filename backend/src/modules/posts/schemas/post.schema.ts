
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

export enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Schema({ timestamps: true, collection: 'posts' })
export class Post {
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
  excerpt: string;

  @Prop({ type: String, required: true, default: '' })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'Category', default: null })
  categoryId: Types.ObjectId | null;

  // Ảnh đại diện bài viết
  @Prop({ type: Types.ObjectId, ref: 'Media', default: null })
  thumbnailId: Types.ObjectId | null;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  authorId: Types.ObjectId;

  @Prop({
    required: true,
    enum: PostStatus,
    default: PostStatus.DRAFT,
    index: true,
  })
  status: PostStatus;

  @Prop({ type: Date, default: null, index: true })
  publishedAt: Date | null;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.index({ status: 1, publishedAt: -1 });

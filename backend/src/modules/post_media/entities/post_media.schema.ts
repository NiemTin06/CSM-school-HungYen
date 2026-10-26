
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostMediaDocument = HydratedDocument<PostMedia>;

@Schema({ timestamps: true, collection: 'post_media' })
export class PostMedia {
  @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
  postId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Media', required: true })
  mediaId: Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  sortOrder: number;

  @Prop({ trim: true, maxlength: 500, default: '' })
  caption: string;
}

export const PostMediaSchema =
  SchemaFactory.createForClass(PostMedia);

// Một ảnh không được liên kết hai lần với cùng bài viết.
PostMediaSchema.index(
  { postId: 1, mediaId: 1 },
  { unique: true },
);

PostMediaSchema.index({ postId: 1, sortOrder: 1 });

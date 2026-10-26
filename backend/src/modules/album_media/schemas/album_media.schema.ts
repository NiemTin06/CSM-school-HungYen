
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type AlbumMediaDocument = HydratedDocument<AlbumMedia>;

@Schema({ timestamps: true, collection: 'album_media' })
export class AlbumMedia {
  @Prop({ type: Types.ObjectId, ref: 'Album', required: true })
  albumId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Media', required: true })
  mediaId: Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  sortOrder: number;

  @Prop({ trim: true, maxlength: 500, default: '' })
  caption: string;
}

export const AlbumMediaSchema =
  SchemaFactory.createForClass(AlbumMedia);

// Một ảnh không được liên kết hai lần với cùng album.
AlbumMediaSchema.index(
  { albumId: 1, mediaId: 1 },
  { unique: true },
);

AlbumMediaSchema.index({ albumId: 1, sortOrder: 1 });

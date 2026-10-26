
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BannerDocument = HydratedDocument<Banner>;

@Schema({ timestamps: true, collection: 'banners' })
export class Banner {
  @Prop({ required: true, trim: true, maxlength: 200 })
  title: string;

  @Prop({ trim: true, default: '' })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Media', required: true })
  mediaId: Types.ObjectId;

  @Prop({ trim: true, default: '' })
  link: string;

  @Prop({ type: Number, default: 0, index: true })
  sortOrder: number;

  @Prop({ type: Boolean, default: true, index: true })
  isActive: boolean;

  @Prop({ type: Date, default: null })
  startAt: Date | null;

  @Prop({ type: Date, default: null })
  endAt: Date | null;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);

BannerSchema.index({ isActive: 1, sortOrder: 1 });


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type SiteSettingDocument = HydratedDocument<SiteSetting>;

@Schema({ timestamps: true })
export class SiteSetting {
  @Prop({ required: true, default: 'Trường THCS' })
  siteName: string;

  @Prop({ type: Types.ObjectId, ref: 'Media', default: null })
  logoMediaId: Types.ObjectId | null;

  @Prop({ type: Types.ObjectId, ref: 'Media', default: null })
  faviconMediaId: Types.ObjectId | null;

  @Prop({ default: '' })
  address: string;

  @Prop({ default: '' })
  phone: string;

  @Prop({ default: '' })
  email: string;

  @Prop({ default: '' })
  introduction: string;

  @Prop({ type: [String], default: [] })
  socialLinks: string[];

  @Prop({ type: Types.ObjectId, ref: 'User', default: null })
  updatedBy: Types.ObjectId | null;
}

export const SiteSettingSchema =
  SchemaFactory.createForClass(SiteSetting);

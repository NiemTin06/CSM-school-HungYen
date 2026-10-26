import { Module } from '@nestjs/common';
import { SiteSettingsService } from './site_settings.service.js';
import { SiteSettingsController } from './site_settings.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { SiteSetting, SiteSettingSchema } from './schemas/site_setting.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: SiteSetting.name, schema: SiteSettingSchema}])], 
  controllers: [SiteSettingsController],
  providers: [SiteSettingsService],
})
export class SiteSettingsModule {}

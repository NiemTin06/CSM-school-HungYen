import { PartialType } from '@nestjs/mapped-types';
import { CreateSiteSettingDto } from './create-site_setting.dto.js';

export class UpdateSiteSettingDto extends PartialType(CreateSiteSettingDto) {}

import { Injectable } from '@nestjs/common';
import { CreateSiteSettingDto } from './dto/create-site_setting.dto.js';
import { UpdateSiteSettingDto } from './dto/update-site_setting.dto.js';

@Injectable()
export class SiteSettingsService {
  create(createSiteSettingDto: CreateSiteSettingDto) {
    return 'This action adds a new siteSetting';
  }

  findAll() {
    return `This action returns all siteSettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} siteSetting`;
  }

  update(id: number, updateSiteSettingDto: UpdateSiteSettingDto) {
    return `This action updates a #${id} siteSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} siteSetting`;
  }
}

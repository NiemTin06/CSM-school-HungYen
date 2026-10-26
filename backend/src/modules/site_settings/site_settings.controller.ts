import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteSettingsService } from './site_settings.service.js';
import { CreateSiteSettingDto } from './dto/create-site_setting.dto.js';
import { UpdateSiteSettingDto } from './dto/update-site_setting.dto.js';

@Controller('site-settings')
export class SiteSettingsController {
  constructor(private readonly siteSettingsService: SiteSettingsService) {}

  @Post()
  create(@Body() createSiteSettingDto: CreateSiteSettingDto) {
    return this.siteSettingsService.create(createSiteSettingDto);
  }

  @Get()
  findAll() {
    return this.siteSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteSettingDto: UpdateSiteSettingDto) {
    return this.siteSettingsService.update(+id, updateSiteSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteSettingsService.remove(+id);
  }
}

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";


import { AlbumMediaModule } from "@/modules/album_media/album_media.module.js";
import { AlbumsModule } from "@/modules/albums/albums.module.js";
import { BannersModule } from "@/modules/banners/banners.module.js";
import { CategoriesModule } from "@/modules/categories/categories.module.js";
import { DepartmentsModule } from "@/modules/departments/departments.module.js";
import { DocumentsModule } from "@/modules/documents/documents.module.js";
import { MediaModule } from "@/modules/media/media.module.js";
import { PostMediaModule } from "@/modules/post_media/post_media.module.js";
import { SiteSettingsModule } from "@/modules/site_settings/site_settings.module.js";
import { StaffsModule } from "@/modules/staffs/staffs.module.js";
import { UsersModule } from "@/modules/users/users.module.js";
import { AuthModule } from '@/auth/auth.module.js';

@Module({
  imports: [
    AlbumMediaModule,
    AlbumsModule,
    BannersModule,
    CategoriesModule,
    DepartmentsModule,
    DocumentsModule,
    MediaModule,
    PostMediaModule,
    SiteSettingsModule,
    StaffsModule,
    UsersModule,

    ConfigModule.forRoot({isGlobal: true}),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),

    AuthModule,



  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

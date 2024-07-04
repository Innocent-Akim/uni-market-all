import { Module } from '@nestjs/common';
import { CategoriesController } from './controller/categories.controller';
import { CategoriesService } from './service/categories.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesEntity } from './entities/categorie.entity';
import { AppHelpers } from '@uni/helpers/app.helpers';

@Module({
  imports:[
    RouterModule.register([{path:'categorie',module:CategoriesModule}]),
    TypeOrmModule.forFeature([CategoriesEntity])
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService,AppHelpers]
})
export class CategoriesModule {}

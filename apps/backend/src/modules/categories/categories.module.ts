import { Module } from '@nestjs/common';
import { CategoriesController } from './controller/categories/categories.controller';
import { CategoriesService } from './service/categories/categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}

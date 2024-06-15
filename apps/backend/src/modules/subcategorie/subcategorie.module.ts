import { Module } from '@nestjs/common';
import { SubcategorieController } from './controller/subcategorie.controller';
import { SubcategorieService } from './service/subcategorie.service';

@Module({
  controllers: [SubcategorieController],
  providers: [SubcategorieService]
})
export class SubcategorieModule {}

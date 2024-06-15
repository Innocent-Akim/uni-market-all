import { Module } from '@nestjs/common';
import { SubcategorieController } from './controller/subcategorie.controller';
import { SubcategorieService } from './service/subcategorie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubcategorieEntity } from './entities/subcategorie.entity';
import { RouterModule } from '@nestjs/core';

@Module({
  imports:[
    RouterModule.register([{
      path:'subcategorie',
      module:SubcategorieModule
    }]),
    TypeOrmModule.forFeature([SubcategorieEntity])
  ],
  controllers: [SubcategorieController],
  providers: [SubcategorieService]
})
export class SubcategorieModule {}

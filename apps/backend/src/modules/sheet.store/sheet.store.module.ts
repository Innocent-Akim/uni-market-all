import { Module } from '@nestjs/common';
import { SheetStoreController } from './controller/sheet.store.controller';
import { SheetStoreService } from './service/sheet.store.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SheetStoreEntity } from './entities/sheet.store.entity';

@Module({
  imports:[
    RouterModule.register([{path:'sheet-store',module:SheetStoreModule}]),
    TypeOrmModule.forFeature([SheetStoreEntity])
],

  controllers: [SheetStoreController],
  providers: [SheetStoreService]
})
export class SheetStoreModule {}

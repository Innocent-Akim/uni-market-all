import { Module } from '@nestjs/common';
import { SheetStoreController } from './controller/sheet.store.controller';
import { SheetStoreService } from './service/sheet.store.service';

@Module({
  controllers: [SheetStoreController],
  providers: [SheetStoreService]
})
export class SheetStoreModule {}

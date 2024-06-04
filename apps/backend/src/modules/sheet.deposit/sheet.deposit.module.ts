import { Module } from '@nestjs/common';
import { SheetDepositService } from './service/sheet.deposit.service';
import { SheetDepositController } from './controller/sheet.deposit.controller';

@Module({
  providers: [SheetDepositService],
  controllers: [SheetDepositController]
})
export class SheetDepositModule {}

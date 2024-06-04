import { Module } from '@nestjs/common';
import { DepositController } from './controller/deposit.controller';
import { DepositService } from './service/deposit.service';

@Module({
  controllers: [DepositController],
  providers: [DepositService]
})
export class DepositModule {}

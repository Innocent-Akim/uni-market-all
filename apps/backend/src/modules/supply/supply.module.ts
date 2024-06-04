import { Module } from '@nestjs/common';
import { SupplyController } from './controller/supply/supply.controller';
import { SupplyService } from './service/supply/supply.service';

@Module({
  controllers: [SupplyController],
  providers: [SupplyService]
})
export class SupplyModule {}

import { Module } from '@nestjs/common';
import { SupplyDetailsController } from './controller/supply.details.controller';
import { SupplyDetailsService } from './service/supply.details.service';

@Module({
  controllers: [SupplyDetailsController],
  providers: [SupplyDetailsService]
})
export class SupplyDetailsModule {}

import { Module } from '@nestjs/common';
import { SuccursaleController } from './controller/succursale.controller';
import { SuccursaleService } from './service/succursale.service';

@Module({
  controllers: [SuccursaleController],
  providers: [SuccursaleService]
})
export class SuccursaleModule {}

import { Module } from '@nestjs/common';
import { OperationController } from './controller/operation.controller';
import { OperationService } from './service/operation.service';

@Module({
  controllers: [OperationController],
  providers: [OperationService]
})
export class OperationModule {}

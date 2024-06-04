import { Module } from '@nestjs/common';
import { CustomController } from './controller/custom.controller';
import { CustomService } from './service/custom.service';

@Module({
  controllers: [CustomController],
  providers: [CustomService]
})
export class CustomModule {}

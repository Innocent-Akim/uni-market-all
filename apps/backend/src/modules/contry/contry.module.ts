import { Module } from '@nestjs/common';
import { ContryController } from './controller/contry.controller';
import { ContryService } from './service/contry.service';

@Module({
  controllers: [ContryController],
  providers: [ContryService]
})
export class ContryModule {}

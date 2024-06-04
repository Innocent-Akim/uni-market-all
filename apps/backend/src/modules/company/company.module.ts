import { Module } from '@nestjs/common';
import { CompanyController } from './controller/company.controller';
import { CompanyService } from './service/company.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule {}

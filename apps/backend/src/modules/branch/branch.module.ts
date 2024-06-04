import { Module } from '@nestjs/common';
import { BranchController } from './controller/branch.controller';
import { BranchService } from './service/branch.service';

@Module({
  controllers: [BranchController],
  providers: [BranchService]
})
export class BranchModule {}

import { Module } from '@nestjs/common';
import { CustomController } from './controller/custom.controller';
import { CustomService } from './service/custom.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
import { CustomEntity } from './entities/custom.entity';

@Module({
imports:[
  RouterModule.register([{ path: '/custom', module: CustomModule }]),
  TypeOrmModule.forFeature([CustomEntity]),
],
  controllers: [CustomController],
  providers: [CustomService]
})
export class CustomModule {}

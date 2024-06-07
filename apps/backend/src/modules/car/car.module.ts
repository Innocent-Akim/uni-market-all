import { Module } from '@nestjs/common';
import { CarController } from './controller/car.controller';
import { CarService } from './service/car.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './entities/car.entity';

@Module({
  imports:[
    RouterModule.register([{ path: '/car', module: CarModule }]),
    TypeOrmModule.forFeature([CarEntity]),
  ],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}

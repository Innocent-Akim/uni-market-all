import { Module } from '@nestjs/common';
import { CarController } from './controller/car/car.controller';
import { CarService } from './service/car/car.service';

@Module({
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}

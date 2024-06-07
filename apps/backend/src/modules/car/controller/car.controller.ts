import { Body, Controller, Post } from '@nestjs/common';
import { CrudController, CrudService } from '@uni/crud';
import { CarEntity } from '../entities/car.entity';
import { CarService } from '../service/car.service';

@Controller()
export class CarController extends CrudController<CarEntity> {
    constructor(private readonly carService: CarService) {
        super(carService);
    }
    
   @Post()
   async create(@Body() entity:any):Promise<CarEntity>{
    return await this.carService.saveCar(entity);
   }
}

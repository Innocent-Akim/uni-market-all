import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { CarEntity } from '../entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCarRepository } from '../repository/type-orm-car';
import { ICar } from '@uni/contracts';

@Injectable()
export class CarService extends CrudService<CarEntity> {
    constructor(
        @InjectRepository(CarEntity)
        typeOrmCarRepository: TypeOrmCarRepository
    ) { super(typeOrmCarRepository) }


    async saveCar(car: ICar): Promise<ICar> {
        let res = await this.create(<ICar>(car));
        return await this.findOneByIdString(res.id);
    }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CarEntity } from "../entities/car.entity";

@Injectable()
export class TypeOrmCarRepository extends Repository<CarEntity> {
    constructor(@InjectRepository(CarEntity) readonly repository: Repository<CarEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
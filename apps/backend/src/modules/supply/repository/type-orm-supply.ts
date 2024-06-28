import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SupplyEntity } from "../entities/supply.entity";

@Injectable()
export class TypeOrmSupplyRepository extends Repository<SupplyEntity> {
    constructor(@InjectRepository(SupplyEntity) readonly repository: Repository<SupplyEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SupplyDetailsEntity } from "../entities/supply.details.entity";

@Injectable()
export class TypeOrmSupplyDetailsRepository extends Repository<SupplyDetailsEntity> {
    constructor(@InjectRepository( SupplyDetailsEntity) readonly repository: Repository<SupplyDetailsEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
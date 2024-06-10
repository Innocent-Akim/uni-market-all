import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DepositStockEntity } from "../entities/depot-stock.entity";

@Injectable()
export class TypeOrmDepositStockRepository extends Repository<DepositStockEntity> {
    constructor(@InjectRepository(DepositStockEntity) readonly repository: Repository<DepositStockEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StoreStockEntity } from "../entities/store.stock.entity";

@Injectable()
export class TypeOrmStoreStockRepository extends Repository<StoreStockEntity> {
    constructor(@InjectRepository(StoreStockEntity) readonly repository: Repository<StoreStockEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StoreEntity } from "../entities/store.entity";

@Injectable()
export class TypeOrmStoreRepository extends Repository<StoreEntity> {
    constructor(@InjectRepository(StoreEntity) readonly repository: Repository<StoreEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
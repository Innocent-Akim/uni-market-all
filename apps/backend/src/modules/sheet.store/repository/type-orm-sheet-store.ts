import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SheetStoreEntity } from "../entities/sheet.store.entity";

@Injectable()
export class TypeOrmSheetStoreRepository extends Repository<SheetStoreEntity> {
    constructor(@InjectRepository(SheetStoreEntity) readonly repository: Repository<SheetStoreEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
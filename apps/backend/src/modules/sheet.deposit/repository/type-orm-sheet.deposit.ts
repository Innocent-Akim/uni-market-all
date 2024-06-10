import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SheetDepositEntity } from "../entities/sheet.deposit.entity";

@Injectable()
export class TypeOrmSheetDepositRepository extends Repository<SheetDepositEntity> {
    constructor(@InjectRepository(SheetDepositEntity) readonly repository: Repository<SheetDepositEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
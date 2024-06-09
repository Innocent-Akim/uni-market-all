import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DepositEntity } from "../entities/deposit.entity";

@Injectable()
export class TypeOrmDeposit extends Repository<DepositEntity> {
    constructor(@InjectRepository(DepositEntity) readonly repository: Repository<DepositEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
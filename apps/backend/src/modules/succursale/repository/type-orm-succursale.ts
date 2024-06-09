import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SuccursaleEntity } from "../entities/succursale.entity";

@Injectable()
export class TypeOrmSuccursale extends Repository<SuccursaleEntity> {
    constructor(@InjectRepository(SuccursaleEntity) readonly repository: Repository<SuccursaleEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
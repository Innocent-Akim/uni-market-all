import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CustomEntity } from "../entities/custom.entity";

@Injectable()
export class TypeOrmCustomRepository extends Repository<CustomEntity> {
    constructor(@InjectRepository(CustomEntity) readonly repository: Repository<CustomEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class TypeOrmUserRepository extends Repository<UserEntity> {
    constructor(@InjectRepository(UserEntity) readonly repository: Repository<UserEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
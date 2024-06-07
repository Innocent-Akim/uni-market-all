import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CompanyEntity } from "../entities/company.entity";

@Injectable()
export class TypeOrmCompanyRepository extends Repository<CompanyEntity> {
    constructor(@InjectRepository(CompanyEntity) readonly repository: Repository<CompanyEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoriesEntity } from "../entities/categorie.entity";

@Injectable()
export class TypeOrmCategorieRepository extends Repository<CategoriesEntity> {
    constructor(@InjectRepository(CategoriesEntity) readonly repository: Repository<CategoriesEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SubcategorieEntity } from "../entities/subcategorie.entity";

@Injectable()
export class TypeOrmSubcategorieRepository extends Repository<SubcategorieEntity> {
    constructor(@InjectRepository( SubcategorieEntity) readonly repository: Repository<SubcategorieEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SubcategorieEntity } from '../entities/subcategorie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmSubcategorieRepository } from '../repository/type-orm-subcategorie';

@Injectable()
export class SubcategorieService extends CrudService<SubcategorieEntity> {
    constructor(
        @InjectRepository(SubcategorieEntity)
        typeOrmSubcaterie:TypeOrmSubcategorieRepository
    ){
        super(typeOrmSubcaterie)
    }
}

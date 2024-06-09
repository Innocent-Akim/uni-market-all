import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { CategoriesEntity } from '../entities/categorie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCategorieRepository } from '../repository/type-orm-categorie';

@Injectable()
export class CategoriesService extends CrudService<CategoriesEntity> {
    constructor(
        @InjectRepository(CategoriesEntity)
       typeOrmCategories :TypeOrmCategorieRepository
    ){
        super(typeOrmCategories)
    }
}

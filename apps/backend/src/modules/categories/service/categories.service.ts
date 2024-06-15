import { Injectable, Post } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { CategoriesEntity } from '../entities/categorie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCategorieRepository } from '../repository/type-orm-categorie';
import { ICategorie } from '../interfaces/icategories';
import { CategoriesDto } from '../dto/categories.dto';

@Injectable()
export class CategoriesService extends CrudService<CategoriesEntity> {
    constructor(
        @InjectRepository(CategoriesEntity)
       typeOrmCategories :TypeOrmCategorieRepository
    ){
        super(typeOrmCategories)
    }
   
    async createCategories(body:CategoriesEntity):Promise<CategoriesEntity>{
        let resultat=await this.create(body)
        return await this.findOneByIdString(resultat.id);

    }
}

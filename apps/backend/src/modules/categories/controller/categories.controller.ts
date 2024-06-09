import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { CategoriesEntity } from '../entities/categorie.entity';
import { CategoriesService } from '../service/categories.service';

@Controller()
export class CategoriesController extends CrudController<CategoriesEntity> {
    constructor(
         private categorieServices:CategoriesService
    ){
        super(categorieServices)
    }
}

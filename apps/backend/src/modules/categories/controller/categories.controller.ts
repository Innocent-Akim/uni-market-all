import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { CategoriesEntity } from '../entities/categorie.entity';
import { CategoriesService } from '../service/categories.service';
import { ICategorie } from '../interfaces/icategories';
import { CategoriesDto } from '../dto/categories.dto';

@Controller()
export class CategoriesController extends CrudController<CategoriesEntity> {
    constructor(
         private categorieServices:CategoriesService
    ){
        super(categorieServices)
    }
    
    @Post()
    async create(@Body() body:CategoriesDto):Promise<ICategorie>{
        return this.categorieServices.createCategories(body)
    }
}

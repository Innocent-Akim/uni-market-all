import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { CategoriesEntity } from '../entities/categorie.entity';
import { CategoriesService } from '../service/categories.service';
import { ICategorie } from '../interfaces/icategories';
import { CategoriesDto } from '../dto/categories.dto';
import { AuthGuard } from '@uni/modules/auth/guards/auth.guard';

@Controller()
export class CategoriesController extends CrudController<CategoriesEntity> {
    constructor(
         private categorieServices:CategoriesService
    ){super(categorieServices)}
    

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body:CategoriesDto):Promise<CategoriesEntity>{
        return this.categorieServices.createCategories(body)
    }

    @UseGuards(AuthGuard)
    @Get()
    async find():Promise<CategoriesEntity[]>{
        return this.categorieServices.findCategories()
    }
}

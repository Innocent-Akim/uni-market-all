import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SubcategorieEntity } from '../entities/subcategorie.entity';
import { SubcategorieService } from '../service/subcategorie.service';

@Controller()
export class SubcategorieController extends CrudController<SubcategorieEntity> {
    constructor(
        private subcategorieService:SubcategorieService
    ){super(subcategorieService)}
}

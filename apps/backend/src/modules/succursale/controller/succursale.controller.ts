import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SuccursaleEntity } from '../entities/succursale.entity';
import { SuccursaleService } from '../service/succursale.service';

@Controller()
export class SuccursaleController extends CrudController<SuccursaleEntity> {
    constructor(
        private succursaleService:SuccursaleService
    ){
        super(succursaleService)
    }
}

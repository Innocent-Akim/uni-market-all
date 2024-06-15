import { Body, Controller, Post } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SuccursaleEntity } from '../entities/succursale.entity';
import { SuccursaleService } from '../service/succursale.service';
import { SuccursaleDto } from '../dto/succursale.dto';

@Controller()
export class SuccursaleController extends CrudController<SuccursaleEntity> {
    constructor(
        private succursaleService:SuccursaleService
    ){
        super(succursaleService)
    }

    @Post()
    async create(@Body() body:SuccursaleDto):Promise<SuccursaleEntity>{
        return await this.succursaleService.createSuccursale(body);
    }
}

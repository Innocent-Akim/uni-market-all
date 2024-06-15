import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { CustomEntity } from '../entities/custom.entity';
import { CustomService } from '../service/custom.service';
import { CustomDto } from '../dto/custom.dto';

@Controller()
export class CustomController extends CrudController<CustomEntity> {
    constructor( private customService: CustomService ) { super(customService) }

    @Post()
    @UsePipes(new ValidationPipe({transform:true}))
    async create(@Body() entity:CustomDto):Promise<CustomEntity>{
        return await this.customService.createCustom(entity);
    }
}

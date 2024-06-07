import { Body, Controller, Post } from '@nestjs/common';
import { CrudController, CrudService } from '@uni/crud';
import { CustomEntity } from '../entities/custom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomService } from '../service/custom.service';
import { ICustom } from '@uni/contracts';

@Controller()
export class CustomController extends CrudController<CustomEntity> {
    constructor(
        private custom: CustomService
    ) {
        super(custom)
    }

    @Post()
    async create(@Body() entity:ICustom):Promise<CustomEntity>{
        return await this.create(entity);
    }
}

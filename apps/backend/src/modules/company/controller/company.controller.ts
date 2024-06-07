import { Body, Controller, Post } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyService } from '../service/company.service';
import { CommandBus } from '@nestjs/cqrs';

@Controller('company')
export class CompanyController extends CrudController<CompanyEntity> {
    constructor(private readonly companyService: CompanyService, private readonly commandBus: CommandBus) {
        super(companyService);
    }
    @Post()
    async create(@Body() entity:any):Promise<CompanyEntity>  {
        return await this.commandBus.execute(this.companyService.saveProduct(entity));

     }
}

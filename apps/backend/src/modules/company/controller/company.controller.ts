import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyService } from '../service/company.service';
import { CommandBus } from '@nestjs/cqrs';
import { CompanyDTO } from '../dto/company-dto';

@Controller()
export class CompanyController extends CrudController<CompanyEntity> {
    constructor(private readonly companyService: CompanyService, private readonly commandBus: CommandBus) {
        super(companyService);
    }

    @Post()
    async create(@Body() entity: CompanyDTO): Promise<CompanyEntity> {
        return await this.companyService.saveCompany(entity);
    }

    @Get()
    async find(): Promise<any[]> {
        return await this.companyService.find();
    }
}

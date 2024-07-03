import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SuccursaleEntity } from '../entities/succursale.entity';
import { SuccursaleService } from '../service/succursale.service';
import { SuccursaleDto } from '../dto/succursale.dto';
import { AuthGuard } from '@uni/modules/auth/guards/auth.guard';
@Controller()
export class SuccursaleController extends CrudController<SuccursaleEntity> {
    constructor(
        private succursaleService: SuccursaleService
    ) {
        super(succursaleService)
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body: SuccursaleDto): Promise<SuccursaleEntity> {
        return await this.succursaleService.createSuccursale(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async updatesuccersale():Promise<SuccursaleEntity[]> {
        return await this .succursaleService.findSuccursale();
    }
}

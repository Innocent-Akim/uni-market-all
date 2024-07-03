import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SuccursaleEntity } from '../entities/succursale.entity';
import { TypeOrmSuccursale } from '../repository/type-orm-succursale';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccursaleDto } from '../dto/succursale.dto';
import { RequestContext } from '@uni/context';
import { AppHelpers } from '@uni/helpers/app.helpers';

@Injectable()
export class SuccursaleService extends CrudService<SuccursaleEntity> {
    constructor(
        private readonly appHelpers: AppHelpers,
        @InjectRepository(SuccursaleEntity)
        typeOrmSuccursale: TypeOrmSuccursale
    ) {
        super(typeOrmSuccursale)
    }

    async createSuccursale(body: SuccursaleDto): Promise<SuccursaleEntity> {
        const company: any = RequestContext.currentCompanyId();
        const bodyRequest = { ...body, company }
        
        const existend = await this.typeOrmRepository.findOne({
            where: [
                { designation: bodyRequest.designation }
            ]
        });
        console.log(existend);
        if (existend) {
            await this.appHelpers.handleException(HttpStatus.CONFLICT)
        }
        const response = await this.typeOrmRepository.save({ ...bodyRequest, company });

        return response;

    }
}

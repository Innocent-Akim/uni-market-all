import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SuccursaleEntity } from '../entities/succursale.entity';
import { TypeOrmSuccursale } from '../repository/type-orm-succursale';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccursaleDto } from '../dto/succursale.dto';
import { RequestContext } from '@uni/context';
import { AppHelpers } from '@uni/helpers/app.helpers';
import { UpdateSuccursaleDto } from '../dto/update-succursale.dto';

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
        if (existend?.companyId === company) {
            await this.appHelpers.handleException(HttpStatus.CONFLICT)
        }
        const response = await this.typeOrmRepository.save({ ...bodyRequest, company });

        return response;

    }

    async updateSuccursale(body: UpdateSuccursaleDto): Promise<SuccursaleEntity> {
        const resultat = await this.typeOrmRepository.update({ id: body?.id }, { ...body });
        if (!resultat) {
            await this.appHelpers.handleException(HttpStatus.BAD_REQUEST)

        }
        const response = await this.typeOrmRepository.findOne({
            where: [
                { id: body.id }
            ]
        });

        return response;

    }


    async findSuccursale(): Promise<SuccursaleEntity[]> {
        const companyId = RequestContext.currentCompanyId();
        return await this.typeOrmRepository.createQueryBuilder('succursales').where('succursales.companyId = :companyId', {
            companyId
        }).getMany();


    }
}

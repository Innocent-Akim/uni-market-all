import { HttpStatus, Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { CategoriesEntity } from '../entities/categorie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCategorieRepository } from '../repository/type-orm-categorie';
import { AppHelpers } from '@uni/helpers/app.helpers';
import { RequestContext } from '@uni/context';
import { CategoriesDto } from '../dto/categories.dto';


@Injectable()
export class CategoriesService extends CrudService<CategoriesEntity> {
    constructor(
        private readonly appHelps: AppHelpers,
        @InjectRepository(CategoriesEntity)
        typeOrmCategories: TypeOrmCategorieRepository
    ) {
        super(typeOrmCategories)
    }

    async createCategories(body: CategoriesDto): Promise<CategoriesEntity> {
        const companyId: any = RequestContext.currentCompanyId();
        const { designation } = body

        const response = await this.typeOrmRepository.createQueryBuilder('categories').where('categories.companyId = :companyId', {
            companyId
        }).andWhere('categories.designation = :designation', { designation }).getMany();

        if (response.length > 0) {
            await this.appHelps.handleException(HttpStatus.CONFLICT)
        }
        let resultat = await this.typeOrmRepository.save({ ...body, company: companyId })
        return resultat;
    }

    async findCategories(): Promise<CategoriesEntity[]> {
        const companyId: any = RequestContext.currentCompanyId();
        return await this.typeOrmRepository.createQueryBuilder('categories').where('categories.companyId= :companyId', {
            companyId
        }).getMany()
    }
}

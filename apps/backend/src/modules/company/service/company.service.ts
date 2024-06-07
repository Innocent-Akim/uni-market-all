import { CrudService } from '@uni/crud';
import { TypeOrmCompanyRepository } from '../repository/type-orm-company';
import { CompanyEntity } from '../entities/company.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICompany } from '@uni/contracts';

@Injectable()
export  class CompanyService extends CrudService<CompanyEntity> {
    constructor(
        @InjectRepository(CompanyEntity)
        typeOrmProductRepository: TypeOrmCompanyRepository,
    ) { super(typeOrmProductRepository) }

    async saveProduct(productRequest: ICompany): Promise<CompanyEntity> {
		let res = await this.create(<any>productRequest);
		return await this.findOneByIdString(res.id, {
			relations: ["categories"]
		});
	}
}

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
        typeOrmCompanyRepository: TypeOrmCompanyRepository,
    ) { super(typeOrmCompanyRepository) }

    async saveCompany(company: ICompany): Promise<CompanyEntity> {
		let res = await this.create(<ICompany>company);
		return await this.findOneByIdString(res.id);
	}
}

import { CrudService } from '@uni/crud';
import { TypeOrmCompanyRepository } from '../repository/type-orm-company';
import { CompanyEntity } from '../entities/company.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyDTO } from '../dto/company-dto';

@Injectable()
export class CompanyService extends CrudService<CompanyEntity> {
    constructor(
        @InjectRepository(CompanyEntity)
        typeOrmCompanyRepository: TypeOrmCompanyRepository,
    ) { super(typeOrmCompanyRepository) }

    async saveCompany(company: CompanyDTO): Promise<CompanyEntity> {
        const existed=await this.findOneByWhereOptions({name:company.name});
            if(existed){
                throw new NotFoundException('already')
            }
        let res = await this.save(company);
        return await this.findOneByIdString(res.id)
    }
}

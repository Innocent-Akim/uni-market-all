import { CrudService } from '@uni/crud';
import { TypeOrmCompanyRepository } from '../repository/type-orm-company';
import { CompanyEntity } from '../entities/company.entity';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyDTO } from '../dto/company-dto';

@Injectable()
export class CompanyService extends CrudService<CompanyEntity> {
    constructor(
        @InjectRepository(CompanyEntity)
        typeOrmCompanyRepository: TypeOrmCompanyRepository,
    ) { super(typeOrmCompanyRepository) }

    async saveCompany(company: CompanyDTO): Promise<CompanyEntity> {
        try {
            const existed = await this.typeOrmRepository.findOne({
                where: [
                    { name: company.name },
                    { phone: company.phone },
                    { email: company.email }
                ]
            });
            if (existed) {
                throw new ConflictException('Company already exists with the provided name, phone, or email.')
            }
            let res = await this.typeOrmRepository.save(company);
            return await this.typeOrmRepository.findOne({ where: { id: res.id } })
        } catch (error) {
            throw new NotFoundException(error)

        }

    }


    async find(): Promise<any[]> {
        return await this.typeOrmRepository.find({ relations: ["categorie"] })

    }
}

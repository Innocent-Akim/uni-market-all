import { BadRequestException, Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SuccursaleEntity } from '../entities/succursale.entity';
import { TypeOrmSuccursale } from '../repository/type-orm-succursale';
import { InjectRepository } from '@nestjs/typeorm';
import { SuccursaleDto } from '../dto/succursale.dto';

@Injectable()
export class SuccursaleService extends CrudService<SuccursaleEntity> {
    constructor(
        @InjectRepository(SuccursaleEntity)
        typeOrmSuccursale:TypeOrmSuccursale
    ){
        super(typeOrmSuccursale)
    }


    async createSuccursale(body:SuccursaleDto ):Promise<SuccursaleEntity>{
            const response=await this.typeOrmRepository.save({...body});
            return response;
       
    }
}

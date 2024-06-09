import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SuccursaleEntity } from '../entities/succursale.entity';
import { TypeOrmSuccursale } from '../repository/type-orm-succursale';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SuccursaleService extends CrudService<SuccursaleEntity> {
    constructor(
        @InjectRepository(SuccursaleEntity)
        typeOrmSuccursale:TypeOrmSuccursale
    ){
        super(typeOrmSuccursale)
    }
}

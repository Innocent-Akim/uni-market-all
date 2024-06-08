import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { CustomEntity } from '../entities/custom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCustomRepository } from '../repository/type-orm-Custom';
import { ICustom } from '@uni/contracts';

@Injectable()
export class CustomService extends CrudService<CustomEntity> {
    constructor(
        @InjectRepository(CustomEntity)
        typeOrmCustomRepository: TypeOrmCustomRepository
    ) {
        super(typeOrmCustomRepository)
    }


    async createCustom(custom: ICustom): Promise<CustomEntity> {
        return await this.create(<ICustom>(custom));
    }
}

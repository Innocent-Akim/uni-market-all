import { HttpStatus, Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { OperationEntity } from '../entities/operation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmOperationRepository } from '../repository/type-orm-operation';
import { OperationDto } from '../dto/operation-dto';
import { AppHelpers } from '@uni/helpers/app.helpers';

@Injectable()
export class OperationService extends CrudService<OperationEntity> {
    constructor(
        private readonly appHelpes: AppHelpers,
        @InjectRepository(OperationEntity) typeOrmOperationRepository: TypeOrmOperationRepository) {
        super(typeOrmOperationRepository)
    }


    async createOperation(operation: OperationDto): Promise<OperationEntity> {
        try {
            const response = await this.typeOrmRepository.save({ ...operation });
            return response;
        } catch (error) {
            await this.appHelpes.handleException(HttpStatus.FORBIDDEN);
        }
    }

}

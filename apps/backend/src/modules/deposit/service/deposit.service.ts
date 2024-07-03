import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { DepositEntity } from '../entities/deposit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmDeposit } from '../repository/type-orm-deposit';
import { DepositDto } from '../dto/deposit.dto';
import { RequestContext } from '@uni/context';

@Injectable()
export class DepositService extends CrudService<DepositEntity> {
    constructor(
        @InjectRepository(DepositEntity)
        typeOrmDeposit: TypeOrmDeposit
    ) {
        super(typeOrmDeposit)
    }


    async createDeposit(deposit: DepositDto): Promise<DepositEntity> {
        const succursale: any = RequestContext.currentSuccursaleId();
        const responsive = await this.typeOrmRepository.save({ ...deposit, succursale: succursale });
        return responsive
    }

    async findDepot(): Promise<DepositEntity[]> {
        const succursaleId: any = RequestContext.currentSuccursaleId();
        return await this.typeOrmRepository.createQueryBuilder('deposits').where('deposits.succursaleId= :succursaleId', {
            succursaleId
        }).getMany();
    }
}

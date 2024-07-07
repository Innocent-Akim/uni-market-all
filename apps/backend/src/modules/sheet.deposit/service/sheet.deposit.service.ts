import { HttpStatus, Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SheetDepositEntity } from '../entities/sheet.deposit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmSheetDepositRepository } from '../repository/type-orm-sheet.deposit';
import { SheetDepositDto } from '../dto/sheet.deposit.dto';
import { RequestContext } from '@uni/context';
import { AppHelpers } from '@uni/helpers/app.helpers';

@Injectable()
export class SheetDepositService extends CrudService<SheetDepositEntity> {
    constructor(
        private readonly appHelper: AppHelpers,
        @InjectRepository(SheetDepositEntity)
        typeOrmDepositEntity: TypeOrmSheetDepositRepository) { super(typeOrmDepositEntity) }

    async createSheetDeposit(sheetDeposit: SheetDepositDto): Promise<SheetDepositDto> {
        try {
            const depositId: any = RequestContext.currentDepositId();
            const response=await this.createQueryBuilder('sheet_deposits').where('sheet_deposits.depositId= :depositId',{
                depositId
            }).getMany();
            
            if(response){
                await this.appHelper.handleException(HttpStatus.CONFLICT);
            }
            const resultat = await this.typeOrmRepository.save({ ...sheetDeposit, deposit: depositId });
            return resultat;
        } catch (error) {
            await this.appHelper.handleException(HttpStatus.FORBIDDEN);
        }
    }
}

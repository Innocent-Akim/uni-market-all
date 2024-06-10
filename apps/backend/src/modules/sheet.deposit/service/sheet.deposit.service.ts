import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SheetDepositEntity } from '../entities/sheet.deposit.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmSheetDepositRepository } from '../repository/type-orm-sheet.deposit';

@Injectable()
export class SheetDepositService extends CrudService<SheetDepositEntity> {
    constructor(@InjectRepository(SheetDepositEntity) typeOrmDepositEntity:TypeOrmSheetDepositRepository)
    {super(typeOrmDepositEntity)}
}

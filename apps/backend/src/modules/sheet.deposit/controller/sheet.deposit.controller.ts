import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SheetDepositEntity } from '../entities/sheet.deposit.entity';
import { SheetDepositService } from '../service/sheet.deposit.service';

@Controller()
export class SheetDepositController extends CrudController<SheetDepositEntity> {
    constructor(private sheetDepositService:SheetDepositService){super(sheetDepositService)}
}

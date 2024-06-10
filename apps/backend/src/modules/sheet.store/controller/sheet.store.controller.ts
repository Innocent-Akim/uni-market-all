import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { SheetStoreEntity } from '../entities/sheet.store.entity';
import { SheetStoreService } from '../service/sheet.store.service';

@Controller()
export class SheetStoreController extends CrudController<SheetStoreEntity> {
    constructor(private sheetStoreService:SheetStoreService){super(sheetStoreService)}
}

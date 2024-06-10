import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { SheetStoreEntity } from '../entities/sheet.store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmSheetStoreRepository } from '../repository/type-orm-sheet-store';

@Injectable()
export class SheetStoreService extends CrudService<SheetStoreEntity> {
    constructor(@InjectRepository(SheetStoreEntity)
    typeOrmSheetStoreRepository: TypeOrmSheetStoreRepository
){super(typeOrmSheetStoreRepository)}
}

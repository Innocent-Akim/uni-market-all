import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { StoreService } from '../service/store.service';
import { StoreEntity } from '../entities/store.entity';

@Controller()
export class StoreController extends CrudController<StoreEntity> {
    constructor(private storeService: StoreService) {
        super(storeService)
    }
}

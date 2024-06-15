import { Body, Controller, Post } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { StoreService } from '../service/store.service';
import { StoreEntity } from '../entities/store.entity';
import { StoreDto } from '../dto/store-dto';

@Controller()
export class StoreController extends CrudController<StoreEntity> {
    constructor(private storeService: StoreService) {
        super(storeService)
    }

    @Post()
    async createStor(@Body() store: StoreDto):Promise<StoreEntity>{
        return await this.storeService.createStore(store);
    }
}

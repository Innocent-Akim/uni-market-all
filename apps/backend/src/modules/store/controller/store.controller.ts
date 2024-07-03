import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { StoreService } from '../service/store.service';
import { StoreEntity } from '../entities/store.entity';
import { StoreDto } from '../dto/store-dto';
import { AuthGuard } from '@uni/modules/auth/guards/auth.guard';

@Controller()
export class StoreController extends CrudController<StoreEntity> {
    constructor(private storeService: StoreService) {
        super(storeService)
    }
    @UseGuards(AuthGuard)
    @Post()
    async createStore(@Body() store: StoreDto):Promise<StoreEntity>{
        return await this.storeService.createStore(store);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findStore():Promise<StoreEntity[]>{
        return await this.storeService.findStore();
    }
}

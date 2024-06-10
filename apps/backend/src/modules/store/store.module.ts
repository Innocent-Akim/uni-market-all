import { Module } from '@nestjs/common';
import { StoreController } from './controller/store.controller';
import { StoreService } from './service/store.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './entities/store.entity';

@Module({
  imports: [
    RouterModule.register([ { path: '/store', module: StoreModule }]),
    TypeOrmModule.forFeature([StoreEntity])
  ],
  controllers: [StoreController],
  providers: [StoreService]
})
export class StoreModule { }

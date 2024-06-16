import { Module } from '@nestjs/common';
import { ImagesController } from './controller/images.controller';
import { ImagesService } from './service/images.service';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageEntity } from './entities/image.entity';

@Module({
  imports:[
    RouterModule.register([ {path:'image', module:ImagesModule} ]),
    TypeOrmModule.forFeature([ImageEntity])
  ],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule {}

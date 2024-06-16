import { Injectable } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { ImageEntity } from '../entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmImageRepository } from '../repository/type-orm-image';

@Injectable()
export class ImagesService extends CrudService<ImageEntity> {
    constructor(
        @InjectRepository(ImageEntity)
        typeOrmImageRepository:TypeOrmImageRepository
    ){super(typeOrmImageRepository)}
}

import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { ImageEntity } from '../entities/image.entity';
import { ImagesService } from '../service/images.service';

@Controller()
export class ImagesController extends CrudController<ImageEntity> {
    constructor(
        private imageService:ImagesService
    ){super(imageService)}
}

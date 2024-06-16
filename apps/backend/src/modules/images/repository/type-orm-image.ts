import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ImageEntity } from "../entities/image.entity";

@Injectable()
export class TypeOrmImageRepository extends Repository<ImageEntity> {
    constructor(@InjectRepository(ImageEntity) readonly repository: Repository<ImageEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}
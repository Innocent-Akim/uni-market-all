import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { CustomEntity } from '../entities/custom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ICustom } from '@uni/contracts';
import { CustomDto } from '../dto/custom.dto';
import { TypeOrmCustomRepository } from '../repository/type-orm-Custom';

@Injectable()
export class CustomService extends CrudService<CustomEntity> {
    constructor(
        @InjectRepository(CustomEntity)
        typeOrmCustomRepository: TypeOrmCustomRepository
    ) {
        super(typeOrmCustomRepository)
    }


    async createCustom(custom: CustomDto): Promise<CustomEntity> {
    try {
        // const existingCustom = await this.findOneByOptions({where:{fullname:custom.fullname}} );
        // console.log("============>",existingCustom)
        // if (existingCustom) {
        //     throw new BadRequestException("La requête est incorrecte. Veuillez vérifier les données envoyées et réessayer.")
        // }
        const reponse = await this.create((custom));
        if (reponse)
            
            return reponse; 
    } catch (error) {
        new Error(error)
    }
 
    }
}

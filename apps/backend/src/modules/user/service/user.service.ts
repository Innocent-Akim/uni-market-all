import { ForbiddenException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmUserRepository } from '../repository/type-orm-user';
import { UserDto } from '../dto/user.dto';
import { getHashPassword } from '@uni/helpers/app.helpers';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends CrudService<UserEntity> {

    constructor(
        @InjectRepository(UserEntity)
        typeOrmUserRepository: TypeOrmUserRepository
    ) { super(typeOrmUserRepository) }

    async createUser(user: UserDto): Promise<UserDto> {
        const one_user = await this.typeOrmRepository.findOne({ where: { email: user.email } });
        if (one_user) {
            throw new ForbiddenException("Mail already in the dadabase !!!")
        }
        const password = await getHashPassword(user.password);
        const response = await this.typeOrmRepository.save({ ...user, password });
        return response;
    }

    async authificate(login: LoginDto): Promise<any> {
        const response = await this.typeOrmRepository.findOne({ where: { email: login.email } });
        if (!response) {
            throw new NotFoundException("Votre nom d'utilisateur ou le mot de passe est incorrect.")
        }
        const compare = await bcrypt.compare(login.password, response.password);
        if (!compare) {
            throw new NotFoundException("Votre nom d'utilisateur ou le mot de passe est incorrect.")
        };
        return response;


    }



}

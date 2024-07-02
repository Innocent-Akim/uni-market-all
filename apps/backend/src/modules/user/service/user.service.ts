import { ForbiddenException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CrudService } from '@uni/crud';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmUserRepository } from '../repository/type-orm-user';
import { UserDto } from '../dto/user.dto';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';
import { AppHelpers } from '@uni/helpers/app.helpers';
import { RequestContext } from '@uni/context';

@Injectable()
export class UserService extends CrudService<UserEntity> {

    constructor(
        private appHelpers: AppHelpers,
        @InjectRepository(UserEntity)
        typeOrmUserRepository: TypeOrmUserRepository
    ) { super(typeOrmUserRepository) }

    async createUser(user: UserDto): Promise<UserDto> {
        const one_user = await this.typeOrmRepository.findOne({ where: { email: user.email } });
        const context=RequestContext.currentDepositId()
        console.log(context)
        if (one_user) {
            throw new ForbiddenException("Mail already in the dadabase !!!")
        }
        const password = await this.appHelpers.getHashPassword(user.password);
        const response = await this.typeOrmRepository.save({ ...user, password });
        return response;
    }

    async authificate(login: LoginDto): Promise<any> {
        const user = await this.typeOrmRepository.findOne({ where: { email: login.email },relationLoadStrategy:'query' });
        console.log(user)
        if (!user) {
            throw new NotFoundException("Votre nom d'utilisateur ou le mot de passe est incorrect.")
        }
        const compare = await bcrypt.compare(login.password, user.password);
        if (!compare) {
            throw new NotFoundException("Votre nom d'utilisateur ou le mot de passe est incorrect.")
        };
        const token = await this.appHelpers.generateAuthToken(user);
        return {
            ...user,
            token:token
        };


    }



}

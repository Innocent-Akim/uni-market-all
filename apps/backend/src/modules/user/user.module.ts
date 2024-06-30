import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AppHelpers } from '@uni/helpers/app.helpers';


@Module({
  imports:[
    RouterModule.register([{
      path:'user',
      module:UserModule
    }]),
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UserController],
  providers: [UserService,AppHelpers],
  exports:[]
})
export class UserModule {}

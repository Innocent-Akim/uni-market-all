import { Controller } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../service/user.service';

@Controller()
export class UserController extends CrudController<UserEntity> {
    constructor(
        private readonly userService:UserService
    ){super(userService)}
}

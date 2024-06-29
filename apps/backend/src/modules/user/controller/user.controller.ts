import { Body, Controller, Post } from '@nestjs/common';
import { CrudController } from '@uni/crud';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';

@Controller()
export class UserController extends CrudController<UserEntity> {
    constructor(
        private readonly userService: UserService
    ) { super(userService) }

    @Post()
    async create(@Body() user: UserDto): Promise<UserDto> {
        return await this.userService.createUser(user)
    }
}

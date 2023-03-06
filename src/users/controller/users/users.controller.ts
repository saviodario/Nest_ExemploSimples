import { Controller,Body,Get,Post } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Get()
    async getUsers(){
        return this.userService.findUsers()
    }

    @Post()
    createUser(@Body() createUserDto:createUserDto){
        return this.userService.createUser(createUserDto)
    }
}

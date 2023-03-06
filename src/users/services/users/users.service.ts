import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/Users';
import { CreateUserParams } from 'src/utils/types';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,){}

    findUsers(){
        return this.userRepository.find()
    }

    createUser(userDetails:CreateUserParams){
        const newUser = this.userRepository.create({ 
            ...userDetails, 
            createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
    }
}

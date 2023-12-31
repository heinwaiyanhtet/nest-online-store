import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService{

    
    constructor(
        @InjectRepository(User)
        private usersRepository : Repository<User>
    ){}


    async createOrUpdate(user:User) : Promise<User>{

        const hash = await bcrypt.hash(user.getPassword(),10);
        user.setPassword(hash);
        return this.usersRepository.save(user);

    }
}
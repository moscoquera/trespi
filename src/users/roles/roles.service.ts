import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from '../entities/roles.entity';

@Injectable()
export class RolesService {

    constructor(@InjectRepository(Roles) private repo: Repository<Roles>){}

    async findAll(){
        return await this.repo.find({order:{
            'name':'ASC'
        }})
    }

}

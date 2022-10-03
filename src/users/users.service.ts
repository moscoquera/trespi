import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from './entities/roles.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    @InjectRepository(Roles)
    private rolesRepo: Repository<Roles>
    ){

  }

  async create(createUserDto: CreateUserDto) {
      const role = await this.rolesRepo.findOneBy({id: createUserDto.roleId})
      if(!role){
        throw new NotFoundException("Role not found")
      }
    
      const user = this.repo.create({
        name: createUserDto.name,
        last_name: createUserDto.last_name,
        document: createUserDto.document,
        rolesId: role.id,
      });
      
      return await this.repo.save(user);
  }

  async findAll() {
    return await this.repo.find({order:{name:'ASC', last_name: 'ASC'}})
  }

  async findOne(id: string) {
    const user = await this.repo.findOneBy({id});
    if(!user){
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.findOne(id);

    const role = await this.rolesRepo.findOneBy({id: updateUserDto.roleId})
    if(!role){
      throw new NotFoundException("Role not found")
    }
  
     user = this.repo.merge(user,{
      name: updateUserDto.name,
      last_name: updateUserDto.last_name,
      document: updateUserDto.document,
      rolesId: role.id,
    });
      
    return await this.repo.save(user);

  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.repo.softDelete({id});
    return user;
  }
}

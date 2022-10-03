import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,
    ){

  }

  async create(createUserDto: CreateProductDto) {
      const product = this.repo.create({...createUserDto});
      return await this.repo.save(product);
  }

  async findAll() {
    return await this.repo.find({order:{name:'ASC'}})
  }

  async findOne(id: string) {
    const user = await this.repo.findOneBy({id});
    if(!user){
      throw new NotFoundException('product not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateProductDto) {
    let product = await this.findOne(id);
    product = this.repo.merge(product,{...updateUserDto});
    return await this.repo.save(product);

  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.repo.softDelete({id});
    return user;
  }
}

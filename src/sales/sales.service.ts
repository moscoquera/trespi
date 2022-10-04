import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { SaleProduct } from './entities/saleProduct.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private repo: Repository<Sale>,
    @InjectRepository(SaleProduct)
    private saleProductRepo: Repository<SaleProduct>,
    private productsService: ProductsService,
    private userService: UsersService,
    ){

  }

  async create(createOrderDto: CreateSaleDto, userId: string) {
    const user = await this.userService.findOne(userId);
    const products = await Promise.all(createOrderDto.products.map( product => this.productsService.findOne(product.productId)))
    let  sale = this.repo.create({userId: userId});
    sale = await this.repo.save(sale);
    sale.products = createOrderDto.products.map( (product, index) => this.saleProductRepo.create({productsId: product.productId, qty: product.qty, price: products[index].price, salesId: sale.id }))
    await this.repo.save(sale);
    return this.findOne(sale.id);
  }

  async findAll() {
    return await this.repo.find({order:{createdAt:'DESC'}, relations:{products:true}})
  }

  async findOne(id: string) {
    const user = await this.repo.findOne({where:{id}, relations:{products:true}});
    if(!user){
      throw new NotFoundException('sale not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateSaleDto) {
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

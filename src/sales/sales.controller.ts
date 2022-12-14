import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Roles } from 'src/common/decorator/roles.decorator';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @Roles('ADMIN','EMPLOYEE')
  create(@Body() createSaleDto: CreateSaleDto, @Headers() headers) {
    return this.salesService.create(createSaleDto,headers['auth']);
  }

  @Get()
  @Roles('ADMIN','EMPLOYEE')
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN','EMPLOYEE')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.salesService.remove(id);
  }
}

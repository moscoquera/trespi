import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Roles } from 'src/common/decorator/roles.decorator';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @Roles('ADMIN','EMPLOYEE')
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto,"4608896d-4ee2-4510-8ab3-a41a233c9944");
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

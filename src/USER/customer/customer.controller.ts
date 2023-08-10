import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { customerService } from './customer.service';
import { CustomerDTO } from './dto/customer.dto';


@Controller('customer')
export class customerController {
  constructor(private readonly customerService: customerService) {}

  @Post()
  create(@Body() customerDto: CustomerDTO) {
    return this.customerService.create(customerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}

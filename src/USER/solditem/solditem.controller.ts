import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolditemService } from './solditem.service';
import { CreateSolditemDto } from './dto/create-solditem.dto';


@Controller('solditem')
export class SolditemController {
  constructor(private readonly solditemService: SolditemService) {}

  @Post()
  create(@Body() createSolditemDto: CreateSolditemDto) {
    return this.solditemService.create(createSolditemDto);
  }

  @Get()
  findAll() {
    return this.solditemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solditemService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solditemService.remove(+id);
  }
}

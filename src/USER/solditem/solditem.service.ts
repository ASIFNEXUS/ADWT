import { Injectable } from '@nestjs/common';
import { CreateSolditemDto } from './dto/create-solditem.dto';


@Injectable()
export class SolditemService {
  create(createSolditemDto: CreateSolditemDto) {
    return 'This action adds a new solditem';
  }

  findAll() {
    return `This action returns all solditem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solditem`;
  }

  

  remove(id: number) {
    return `This action removes a #${id} solditem`;
  }
}

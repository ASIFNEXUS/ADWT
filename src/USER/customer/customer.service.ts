import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerDTO } from './dto/customer.dto';
import { Cart } from './entities/customer-cart.entity';
import { Library } from './entities/customer-library.entity';
import { Wishlist } from './entities/customer-wishlist.entity';
import { CustomerEntity } from './entities/customer.entity';


@Injectable()
export class customerService {

    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepo: Repository<CustomerEntity>,
        @InjectRepository(Wishlist)
        private wishlistRepo: Repository<Wishlist>,

        
      
        ) {}

  create(customerDto: CustomerDTO) {
    return 'This action adds a new service';
  }

  findAll() {
    return `This action returns all service`;
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }



  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}

import { Module } from '@nestjs/common';
import { customerService } from './customer.service';
import { customerController } from './customer.controller';
import { CustomerEntity } from './entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from './entities/customer-library.entity';
import { Wishlist } from './entities/customer-wishlist.entity';
import { Cart } from './entities/customer-cart.entity';
import { ProductEntity } from '../product/entities/product.entity';
import { ProductService } from '../product/product.service';
import { paymentEntity } from '../payment/entities/payment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CustomerEntity,Cart,Library,Wishlist,ProductEntity,paymentEntity])],
  controllers: [customerController],
  providers: [customerService,ProductService]
})
export class customerModule {}

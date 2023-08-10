import { Module } from '@nestjs/common';import { TypeOrmModule } from "@nestjs/typeorm";

import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartEntity } from './entities/cart.entity';
import { ProductEntity } from '../product/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity, CartEntity])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}

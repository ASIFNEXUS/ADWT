import { Module } from '@nestjs/common';
import { SolditemService } from './solditem.service';
import { SolditemController } from './solditem.controller';
import { solditemEntity } from './entities/solditem.entity';
import { userEntity } from '../registration/entities/registration.entity';
import { ProductEntity } from '../product/entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity, userEntity,solditemEntity ])],
  controllers: [SolditemController],
  providers: [SolditemService]
})
export class SolditemModule {}

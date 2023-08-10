import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../product/entities/product.entity';
import { inventoryEntity } from './entities/inventory.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProductEntity, inventoryEntity])],
  controllers: [InventoryController],
  providers: [InventoryService]
})
export class InventoryModule {}

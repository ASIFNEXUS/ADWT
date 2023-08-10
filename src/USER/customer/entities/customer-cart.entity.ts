//import { Game } from 'src/game/entities/game.entity';
import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CustomerEntity } from './Customer.entity';

@Entity('Cart')
export class Cart {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  //@ManyToOne(() => CustomerEntity, (customer) => customer.cart)
  //customer: CustomerEntity;

  @ManyToOne(() => ProductEntity, (product) => product.carts)
  game: ProductEntity;
}

//import { Game } from 'src/game/entities/game.entity';
import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CustomerEntity } from './Customer.entity';

@Entity('wishlist')
export class Wishlist {
  @PrimaryGeneratedColumn()
  gameImageId: number;

  //@ManyToOne(() => CustomerEntity, (customer) => customer.wishlist)
  //customer: CustomerEntity;

  @ManyToOne(() => ProductEntity,(productss) => productss.wishlists)
  productss: ProductEntity;
}

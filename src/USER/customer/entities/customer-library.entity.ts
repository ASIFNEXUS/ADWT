//import { Game } from 'src/game/entities/game.entity';
import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CustomerEntity} from './Customer.entity';

@Entity('library')
export class Library {
  @PrimaryGeneratedColumn()
  gameImageId: number;


  @ManyToOne(() => ProductEntity,(product) => product.librarys)
  game: ProductEntity;
}

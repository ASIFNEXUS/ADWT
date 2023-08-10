import { paymentEntity } from 'src/user/payment/entities/payment.entity';
import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Review } from 'src/user/review/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cart } from './customer-cart.entity';
import { Library } from './customer-library.entity';
import { Wishlist } from './customer-wishlist.entity';

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ default: 'customer' })
  role: string;

  @Column()
  verificationStatus: string;
  
  @OneToMany(() => ProductEntity, (product) => product.customer)
  product: ProductEntity[];
  //@OneToMany(() => paymentEntity, (payments) => payments.customers)
  //payments: paymentEntity[];
 
  /*@OneToMany(() => Wishlist, (wishlist) => wishlist.customer)
  wishlist: Wishlist[];
  
  @OneToMany(() => Cart, (cart) => cart.customer)
  cart: Cart[];*/
  


  //@OneToMany(() => Review, (review) => review.customers)
  //reviews: Review[];
}

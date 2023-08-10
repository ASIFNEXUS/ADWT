import { CartEntity } from 'src/USER/cart/entities/cart.entity';
import { CustomerEntity } from 'src/USER/customer/entities/customer.entity';
import { solditemEntity } from 'src/USER/solditem/entities/solditem.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
@Entity("payment")
export class paymentEntity {
@PrimaryGeneratedColumn()
    Id: number;
@Column()
    pementtype: string;
 @Column()
    pementdate: Date;
@Column()
    transactionNo: number;

    @ManyToOne(() => CartEntity, (cart) => cart.payments)
    cart: CartEntity

    @ManyToMany(() => solditemEntity, (solditem) => solditem.payments)
    solditems: solditemEntity[]
  
   // @ManyToOne(() => CustomerEntity, (customer) => customer.payments)
    //customers: CustomerEntity[]
}
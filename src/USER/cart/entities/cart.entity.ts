import { paymentEntity } from 'src/USER/payment/entities/payment.entity';
import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
@Entity("cart")
export class CartEntity {
@PrimaryGeneratedColumn()
    Id: number;
@Column()
    producid: number;
@Column()
    producttype: string;
@Column()
    status: string;

    @OneToMany(() => paymentEntity, (payment) => payment.cart)
    payments: paymentEntity[]

    @OneToMany(() => ProductEntity, (product) => product.cart)
    products: paymentEntity[]
}
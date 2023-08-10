import { paymentEntity } from 'src/USER/payment/entities/payment.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
@Entity("solditem")
export class solditemEntity {
@PrimaryGeneratedColumn()
    Id: number;
@Column()
    productid: number;
 @Column()
    userid: number;
@Column()
    buyingdate: Date;

    @ManyToMany(() => paymentEntity, (payment) => payment.solditems)
    @JoinTable()
    payments: paymentEntity[]
}
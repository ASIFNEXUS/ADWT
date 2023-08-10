
import { feedbackEntity } from 'src/USER/feedback/entities/feedback.entity';
import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity("user")
export class userEntity {
@PrimaryGeneratedColumn()
    userid: number;
@Column()
    name: string;
 @Column()
    email: string;
@Column()
    phone: number;
@Column()
    password: string;
 @Column({nullable: true})
    verificationStatus: boolean;
@Column({default: "user"})
    role: string;

    @OneToMany(() => ProductEntity, (product) => product.user)
    payments: ProductEntity[]
    

    @OneToMany(() => feedbackEntity, (feedback) => feedback.user)
    feedbacks: feedbackEntity[]
    products: any;
}
//import { Game } from 'src/game/entities/game.entity';
import { CustomerEntity } from 'src/USER/customer/entities/customer.entity';
import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    reviewId: number;

    @ManyToOne(() => CustomerEntity)
    customer: CustomerEntity; //one user can have many reviews

    @ManyToOne(() => ProductEntity)
    game: ProductEntity; //one game can have many reviews


    @Column()
    reviewDate: Date;

    @Column()
    reviewRating: number;

    @Column()
    reviewText: string;

    @Column()
    reviewTitle: string;

   // @ManyToOne(() => CustomerEntity,(customer) => customer.reviews)
    //customers: CustomerEntity;
}

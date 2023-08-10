import { ProductEntity } from 'src/USER/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity("inventory")
export class inventoryEntity {
@PrimaryGeneratedColumn()
    Id: number;
@Column()
    stock: number;
 @Column()
    productid: number;

    @ManyToOne(() => ProductEntity, (product) => product.inventories)
    product: ProductEntity
}
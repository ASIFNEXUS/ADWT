import { CartEntity } from 'src/USER/cart/entities/cart.entity';
import { Cart } from 'src/USER/customer/entities/customer-cart.entity';
import { Library } from 'src/USER/customer/entities/customer-library.entity';
import { Wishlist } from 'src/USER/customer/entities/customer-wishlist.entity';
import { CustomerEntity } from 'src/USER/customer/entities/customer.entity';
import { inventoryEntity } from 'src/USER/inventory/entities/inventory.entity';
import { userEntity } from 'src/USER/registration/entities/registration.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity("product")
export class ProductEntity {
@PrimaryGeneratedColumn()
    Id: number;
@Column()
    productname: string;
 @Column()
    productdiscription: string;
@Column()
    availablecatacory: string;
@Column()
    discount: number;
 @Column()
    productprice: number;
    @ManyToOne(() => CustomerEntity, (customer) => customer.product)
    customer: CustomerEntity

    @ManyToOne(() => userEntity, (user) => user.products)
    user: userEntity

    @ManyToOne(() => CartEntity, (cart) => cart.products)
    cart: CartEntity

    @OneToMany(() => inventoryEntity, (inventory) => inventory.product)
    inventories: inventoryEntity[]
    
    @OneToMany(() => Cart,(cart)=> cart.game)
    carts: Cart[]

    @OneToMany(() => Library,(library)=> library.game)
    librarys: Library[]

    @OneToMany(() => Wishlist,(wishlists)=> wishlists.productss)
    wishlists: Wishlist[]
}
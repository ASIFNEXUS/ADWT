//import { Game } from "src/game/entities/game.entity";
import { ProductEntity } from "src/USER/product/entities/product.entity";
import { CustomerDTO } from "./customer.dto";

export class LibraryDTO{
    libraryId: number;
    customer: CustomerDTO;
    game: ProductEntity;
}
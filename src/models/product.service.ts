import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";

export class ProductsService {
    constructor
    (
        @InjectRepository(Product)
        private productsRepository : Repository<Product>
    ){}

    findAll() : Promise<Product[]> {
        return this.productsRepository.find();
    }

    findOne(id:any) : Promise<Product>
    {
        return this.productsRepository.findOne(id);
    }
}
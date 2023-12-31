import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";


@Injectable()
export class ProductsService {
    constructor
    (
        @InjectRepository(Product)
        private productsRepository : Repository<Product>
    ){}

    findAll() : Promise<Product[]> {
        return this.productsRepository.find();
    }

    findOne(id: number): Promise<Product | null> {
        return this.productsRepository.findOneBy({ id });
    }

    createOrUpdate(product : Product) : Promise<Product> {
        return this.productsRepository.save(product);
    }

    async remove(id:string) : Promise<void>
    {
        await this.productsRepository.delete(id);
    }
    
    
}
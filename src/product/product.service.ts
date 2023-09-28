import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  findOne(id: string): Promise<Product> {
    return this.productRepo.findOneBy({ id });
  }

  create(product: Product): Promise<Product> {
    return this.productRepo.save(product);
  }

  async update(id: string, product: Product): Promise<Product> {
    let prodcuttobeUpdated = await this.findOne(id);
    prodcuttobeUpdated = Object.assign({}, prodcuttobeUpdated, product);
    return await this.productRepo.save(prodcuttobeUpdated);
  }

  async delete(id: string): Promise<string> {
    await this.productRepo.delete(id);
    return id;
  }
}

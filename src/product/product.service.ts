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
    return this.productRepo.findOne({
      where: { id },
      relations: { user: true },
    });
  }

  create(product: Product): Promise<Product> {
    return this.productRepo.save(product);
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productRepo.save(product);
  }

  async delete(id: string): Promise<string> {
    await this.productRepo.delete(id);
    return id;
  }
}

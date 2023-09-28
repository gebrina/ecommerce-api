import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductCategory } from "src/entities/product.category.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductCategorySevice {
  constructor(
    @InjectRepository(ProductCategory)
    private proCategoryRepo: Repository<ProductCategory>,
  ) {}

  async findAll(): Promise<ProductCategory[]> {
    return await this.proCategoryRepo.find();
  }

  async findOne(id: string): Promise<ProductCategory> {
    return await this.proCategoryRepo.findOneBy({ id });
  }

  async create(proCategory: ProductCategory): Promise<ProductCategory> {
    return await this.proCategoryRepo.save(proCategory);
  }

  async update(
    id: string,
    proCategory: ProductCategory,
  ): Promise<ProductCategory> {
    let categorytobeUpdated = await this.findOne(id);
    categorytobeUpdated = proCategory;
    return await this.proCategoryRepo.save(categorytobeUpdated);
  }

  async delete(id: string): Promise<string> {
    await this.proCategoryRepo.delete(id);
    return id;
  }
}

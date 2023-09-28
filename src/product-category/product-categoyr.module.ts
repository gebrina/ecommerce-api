import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductCategory } from "src/entities/product.category.entity";
import { ProductCategoryController } from "./product-categoyr.controller";
import { ProductCategorySevice } from "./product-categoyr.sevice";

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  controllers: [ProductCategoryController],
  providers: [ProductCategorySevice],
})
export class ProductCategoryModule {}

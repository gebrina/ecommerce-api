import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "src/entities/product.entity";
import { Public } from "src/decorators/PublicApi.decrator";

@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @Public()
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  @Public()
  findOne(id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put(":id")
  update(id: string, @Body() product: Product) {
    return this.productService.update(id, product);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.productService.delete(id);
  }
}

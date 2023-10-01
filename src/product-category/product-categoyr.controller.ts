import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProductCategorySevice } from "./product-categoyr.service";
import { ProductCategory } from "src/entities/product.category.entity";
import { Public } from "src/decorators/PublicApi.decrator";

@Controller("product-categories")
export class ProductCategoryController {
  constructor(private proCategoryService: ProductCategorySevice) {}

  @Get("")
  @Public()
  findAll() {
    return this.proCategoryService.findAll();
  }

  @Get(":id")
  @Public()
  findOne(@Param("id") id: string) {
    return this.proCategoryService.findOne(id);
  }

  @Post()
  create(@Body() proCategory: ProductCategory) {
    return this.proCategoryService.create(proCategory);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() proCategory: ProductCategory) {
    return this.proCategoryService.update(id, proCategory);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.proCategoryService.delete(id);
  }
}

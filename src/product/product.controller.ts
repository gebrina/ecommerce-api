import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "src/entities/product.entity";
import { Public } from "src/decorators/PublicApi.decrator";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

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
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "public/products-imgs",
        filename: (req, file, callback) => {
          const fileName = Date.now() + file.originalname.split(" ").join("-");
          callback(null, fileName);
        },
      }),
    }),
  )
  create(@Body() product: Product, @UploadedFile() file: Express.Multer.File) {
    const productImage = file.path.replace("public", "").toString();
    product.image = productImage;
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

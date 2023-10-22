import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CartService } from "./cart.service";
import { Cart } from "src/entities/cart.entity";

@Controller("carts")
export class CartController {
  constructor(private cartService: CartService) {}

  @Get("")
  findAll(): Promise<Cart[]> {
    return this.cartService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Cart> {
    return this.cartService.findOne(id);
  }

  @Post("")
  create(@Body() cart: Cart): Promise<Cart> {
    return this.cartService.create(cart);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() cart: Cart): Promise<Cart> {
    return this.cartService.update(id, cart);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<string> {
    return this.cartService.delete(id);
  }
}

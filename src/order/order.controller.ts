import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "src/entities/order.entity";

@Controller("orders")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Post()
  create(@Body() order: Order) {
    return this.orderService.create(order);
  }

  @Put(":id")
  update(@Body() order: Order, @Param("id") id: string) {
    return this.orderService.update(id, order);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.orderService.delete(id);
  }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "src/entities/order.entity";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}

  findAll(): Promise<Order[]> {
    return this.orderRepo.find();
  }

  findOne(id: string): Promise<Order> {
    return this.orderRepo.findOneBy({ id });
  }

  async create(order: Order): Promise<Order> {
    return await this.orderRepo.save(order);
  }

  async update(id: string, order: Order): Promise<Order> {
    return await this.orderRepo.save(order);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.orderRepo.delete(id);
  }
}

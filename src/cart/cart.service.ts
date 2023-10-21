import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "src/entities/cart.entity";
import { Repository } from "typeorm";

@Injectable()
export class CartService {
  constructor(@InjectRepository(Cart) private cartRepo: Repository<Cart>) {}

  findAll(): Promise<Cart[]> {
    return this.cartRepo.find();
  }

  findOne(id: string): Promise<Cart> {
    return this.cartRepo.findOneBy({ id });
  }

  async create(cart: Cart): Promise<Cart> {
    const cartProducts = await this.cartRepo.create(cart);
    return await this.cartRepo.save(cartProducts);
  }

  async update(id: string, cart: Cart): Promise<Cart> {
    await this.cartRepo.update(id, cart);
    return this.findOne(id);
  }

  async delete(id: string): Promise<string> {
    await this.cartRepo.delete(id);
    return id;
  }
}

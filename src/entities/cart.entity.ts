import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";
import { Order } from "./order.entity";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  total: number;

  @ManyToOne(() => User, (user) => user.carts)
  user: User;

  @OneToMany(() => Product, (product) => product.cart)
  prodcuts: Product[];

  @OneToMany(() => Order, (order) => order.cart, { eager: true })
  orders: Order[];
}

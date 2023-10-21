import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";
import { Cart } from "./cart.entity";
import { Payment } from "./payment.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  orderDate: Date;

  @Column()
  requestedDate: Date;

  @Column()
  productPrice: number;

  @Column()
  address: string;

  @Column()
  shippedDate: Date;

  @Column()
  status: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToMany(() => Product, (product) => product.orders, {
    eager: true,
    onUpdate: "CASCADE",
  })
  products: Product[];

  @ManyToOne(() => Cart, (cart) => cart.orders)
  cart: Cart;

  @OneToOne(() => Payment, (payemnt) => payemnt.order)
  payment: Payment;
}

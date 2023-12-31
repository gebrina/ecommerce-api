import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./product.entity";
import { Order } from "./order.entity";
import { Cart } from "./cart.entity";
import { Payment } from "./payment.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(() => Product, (product) => product.user, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  products: Product[];

  @OneToMany(() => Order, (order) => order.user, { eager: true })
  orders: Order[];

  @OneToMany(() => Cart, (cart) => cart.user, { onDelete: "CASCADE" })
  carts: Cart[];

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];
}

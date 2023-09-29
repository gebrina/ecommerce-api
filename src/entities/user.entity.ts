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

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column({ unique: false })
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
  })
  products: Product[];

  @OneToMany(() => Order, (order) => order.user, { eager: true })
  orders: Order[];

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}

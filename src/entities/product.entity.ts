import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { ProductCategory } from "./product.category.entity";
import { Order } from "./order.entity";
import { Cart } from "./cart.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @ManyToOne(() => ProductCategory, (category) => category.products, {
    eager: true,
  })
  category: ProductCategory;

  @ManyToMany(() => Order, (order) => order.products)
  @JoinTable()
  orders: Order[];

  @ManyToOne(() => Cart, (cart) => cart.prodcuts)
  cart: Cart;
}

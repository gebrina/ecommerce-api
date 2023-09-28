import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { ProductCategory } from "./product.category.entity";
import { Order } from "./order.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

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
  @JoinColumn()
  orders: Order[];
}

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  orderDate: Date;

  @Column()
  requestedDate: Date;

  @Column()
  shippedDate: Date;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[];
}

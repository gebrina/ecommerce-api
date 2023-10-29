import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import { User } from "./user.entity";
import { Order } from "./order.entity";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  paymentDate: Date;

  @ManyToOne(() => User, (user) => user.payments, {
    eager: true,
    onDelete: "CASCADE",
  })
  user: User;

  @OneToOne(() => Order, (order) => order.payment)
  order: Order;
}

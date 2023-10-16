import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "src/entities/payment.entity";
import { Repository } from "typeorm";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private payementRepo: Repository<Payment>,
  ) {}

  async findAll(): Promise<Payment[]> {
    return await this.payementRepo.find();
  }

  async create(payment: Payment): Promise<Payment> {
    return await this.payementRepo.save(payment);
  }

  findPublicKey() {
    return process.env.STRIPE_PUBLIC_KEY;
  }
  async delete(id: string): Promise<string> {
    await this.payementRepo.delete(id);
    return id;
  }
}

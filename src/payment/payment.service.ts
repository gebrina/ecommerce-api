import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EmailService } from "src/email/email.service";
import { Payment } from "src/entities/payment.entity";
import Stripe from "stripe";
import { Repository } from "typeorm";

@Injectable()
export class PaymentService {
  private stripe: Stripe;
  constructor(
    @InjectRepository(Payment) private payementRepo: Repository<Payment>,
    private emailService: EmailService,
  ) {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2023-08-16",
    });
  }

  async findAll(): Promise<Payment[]> {
    return await this.payementRepo.find();
  }

  async create(payment: Payment): Promise<Payment> {
    const newPayment = await this.payementRepo.save(payment);
    await this.emailService.sendEmail(newPayment);
    return newPayment;
  }

  findPublicKey() {
    return process.env.STRIPE_PUBLIC_KEY;
  }

  async delete(id: string): Promise<string> {
    await this.payementRepo.delete(id);
    return id;
  }

  async createPaymentIntent(payemnt: Payment): Promise<string> {
    try {
      const { amount } = payemnt;
      const { client_secret } = await this.stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
      });
      return client_secret;
    } catch (e) {
      return e.message;
    }
  }

  async retrievePaymentIntent(id: string) {
    try {
      const { amount_received, amount } =
        await this.stripe.paymentIntents.retrieve(id);
      return {
        amount,
        amount_received,
      };
    } catch (e) {
      return e.message;
    }
  }
}

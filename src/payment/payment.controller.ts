import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { Payment } from "src/entities/payment.entity";

@Controller("payment")
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Get("")
  findAll(): Promise<Payment[]> {
    return this.paymentService.findAll();
  }

  @Post("")
  create(@Body() payment: Payment): Promise<Payment> {
    return this.paymentService.create(payment);
  }

  @Get("retrieve/:id")
  retrievePayment(@Param("id") id: string) {
    return this.paymentService.retrievePaymentIntent(id);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<string> {
    return this.paymentService.delete(id);
  }

  @Get("public-key")
  findPublickKey() {
    return this.paymentService.findPublicKey();
  }

  @Post("intent")
  createPaymentIntent(@Body() payment: Payment): Promise<string> {
    return this.paymentService.createPaymentIntent(payment);
  }
}

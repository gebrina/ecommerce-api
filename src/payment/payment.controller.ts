import { Body, Controller, Get, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { Public } from "src/decorators/PublicApi.decrator";
import { Payment } from "src/entities/payment.entity";

@Controller("payment")
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Get("public-key")
  @Public()
  findPublickKey() {
    return this.paymentService.findPublicKey();
  }

  @Post("intent")
  @Public()
  createPaymentIntent(@Body() payment: Payment): Promise<string> {
    return this.paymentService.createPaymentIntent(payment);
  }
}

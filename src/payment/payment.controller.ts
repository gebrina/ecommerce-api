import { Controller, Get } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { Public } from "src/decorators/PublicApi.decrator";

@Controller("payment")
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Get("public-key")
  @Public()
  findPublickKey() {
    return this.paymentService.findPublicKey();
  }
}

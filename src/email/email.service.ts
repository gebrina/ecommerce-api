import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { Payment } from "src/entities/payment.entity";

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(payment: Payment) {
    const { email, username } = payment.user;
    const products_url = "https://your_front_end_app.com/products";

    try {
      const response = await this.mailerService.sendMail({
        subject: "Payment Success",
        to: email,
        template: "payment.complete.ejs",
        context: {
          username,
          amount: payment.amount,
          products_url,
        },
      });
      return response;
    } catch (e) {
      return e.message;
    }
  }
}

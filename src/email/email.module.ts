import { Module, Global } from "@nestjs/common";
import { MailerModule, MailerService } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { ConfigService } from "@nestjs/config";

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => ({}),
    }),
  ],
  providers: [MailerService],
  exports: [MailerService],
})
export class EmailModule {}

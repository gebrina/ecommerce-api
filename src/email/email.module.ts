import { Module, Global } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import { EmailService } from "./email.service";

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get("SMTP_HOST"), // email protocol e.g if you use gmail user smtp.gmail.com
          auth: {
            user: config.get("SMTP_USERNAME"), // username@email.com
            pass: config.get("SMTP_PASSWORD"), //app password
          },
        },
        defaults: {
          from: "<no-reply> G> tEcHnOlOGy",
        },
        template: {
          adapter: new EjsAdapter(),
          dir: join(__dirname, "templates"),
          options: {
            strict: false,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}

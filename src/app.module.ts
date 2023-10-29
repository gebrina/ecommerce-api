import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { APP_FILTER } from "@nestjs/core";
import { MulterModule } from "@nestjs/platform-express";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ProductCategoryModule } from "./product-category/product-categoyr.module";
import { ProductModule } from "./product/product.module";
import { OrderModule } from "./order/order.module";
import { CartModule } from "./cart/cart.module";
import { PaymentModule } from "./payment/payment.module";
import { ErrorFilter } from "./error-filter/error.filter";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { EmailModule } from "./email/email.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./database.sqlite",
      entities: ["dist/**/*.entity{.ts,.js}"],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    UserModule,
    ProductCategoryModule,
    ProductModule,
    OrderModule,
    CartModule,
    PaymentModule,
    EmailModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
})
export class AppModule {}

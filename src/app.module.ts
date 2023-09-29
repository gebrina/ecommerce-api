import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { ProductCategoryModule } from "./product-category/product-categoyr.module";
import { ProductModule } from "./product/product.module";
import { OrderModule } from "./order/order.module";
import { CartModule } from "./cart/cart.module";
import { APP_FILTER } from "@nestjs/core";
import { ErrorFilter } from "./error-filter/error.filter";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "./database.sqlite",
      entities: ["dist/**/*.entity{.ts,.js}"],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ProductCategoryModule,
    ProductModule,
    OrderModule,
    CartModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
})
export class AppModule {}

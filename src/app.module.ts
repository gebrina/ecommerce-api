import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [PassportModule.register({ defaultStrategy: "jwt" }), UserModule],
})
export class AppModule {}

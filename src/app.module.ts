import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PassportModule } from "@nestjs/passport";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt", session: false }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}

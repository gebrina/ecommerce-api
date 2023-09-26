import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: "read_from_env",
      global: true,
      signOptions: { expiresIn: "2h" }, // you can update the token expiration time range ...
    }),
    UserModule,
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}

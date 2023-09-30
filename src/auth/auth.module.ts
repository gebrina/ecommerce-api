import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      global: true,
      signOptions: {
        expiresIn: "7d",
      },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}

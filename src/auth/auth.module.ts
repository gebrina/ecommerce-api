import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [
    JwtModule.register({
      secret: "read_from_env",
      global: true,
      signOptions: { expiresIn: "2h" }, // you can update the token expiration time range ...
    }),
    UserModule,
  ],
})
export class AuthModule {}

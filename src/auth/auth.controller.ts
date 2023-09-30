import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/entities/user.entity";

@Controller("auth/user")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("")
  login(@Body() user: User, @Req() req: Express.Request) {
    return req.user;
  }
}

import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth/user")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("")
  @UseGuards(AuthGuard("local"))
  login(@Req() req) {
    return this.authService.login(req.user);
  }
}

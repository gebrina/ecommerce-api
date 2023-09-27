import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Public } from "src/decorators/public.decorator";

@Controller("auth/login")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @Public()
  @UseGuards(AuthGuard("local"))
  login(@Req() req) {
    return this.authService.login(req.user);
  }
}

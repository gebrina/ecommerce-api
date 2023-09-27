import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { Public } from "src/decorators/public.decorator";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  // public route
  @Get()
  @Public()
  findAll() {
    return this.userService.findAll();
  }

  //protected route
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
}

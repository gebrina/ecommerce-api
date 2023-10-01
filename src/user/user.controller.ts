import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Body,
  Put,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/entities/user.entity";
import { Public } from "src/decorators/PublicApi.decrator";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("")
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  @Public()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(":id")
  update(@Body() user: User, @Param("id") id: string) {
    return this.userService.update(id, user);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.userService.delete(id);
  }
}

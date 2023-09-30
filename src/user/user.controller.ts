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
  @Public()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  /**
   * Find one user by ID.
   *
   * @param {string} id - The ID of the user.
   * @return {Promise<User>} A promise that resolves to the user with the given ID.
   */
  @Get(":id")
  findOne(@Param("id") id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
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

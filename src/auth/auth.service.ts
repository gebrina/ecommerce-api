import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "src/interfaces/user.interface";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserByName(username);
    if (user?.password === password) return user;
    return null;
  }

  async login(user: User): Promise<User | undefined> {
    const savedUser = await this.userService.findUserByName(user.username);
    if (savedUser?.password !== user.password)
      throw new UnauthorizedException("Invalid username or password");

    return user;
  }
}

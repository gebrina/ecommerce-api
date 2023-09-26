import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/interfaces/user.interface";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserByName(username);
    if (user?.password === password) return user;
    return null;
  }

  async login(user: User): Promise<any> {
    const { username, password } = user;
    const saveduser = await this.userService.findUserByName(username);
    if (saveduser?.password !== password)
      throw new UnauthorizedException("Invalid username or password");

    const { password: userPassword, ...result } = saveduser;
    return {
      access_token: await this.jwtService.signAsync(result),
    };
  }
}

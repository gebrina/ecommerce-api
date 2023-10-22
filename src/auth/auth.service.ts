import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { User } from "src/entities/user.entity";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);
    const isValidPass = await bcrypt.compare(password, user.password);
    if (isValidPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const { password, products, orders, carts, payments, ...result } = user;
    const payload = { sub: user.id, user: result };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

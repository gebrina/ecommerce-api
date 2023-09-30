import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);
    const isValidPass = await bcrypt.compare(password, user.password);
    if (isValidPass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

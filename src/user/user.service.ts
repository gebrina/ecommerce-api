import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { DeleteResult, Repository } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepo.findOneBy({ id });
  }

  async create(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await this.userRepo.save(user);
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepo.findOneBy({ email });
  }

  async update(id: string, user: User): Promise<User> {
    if (user?.password) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
    let usertobeUpdated = await this.findOne(id);
    usertobeUpdated = Object.assign({}, usertobeUpdated, user);
    return this.userRepo.save(usertobeUpdated);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepo.delete(id);
  }
}

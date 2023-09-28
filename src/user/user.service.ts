import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

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
    return await this.userRepo.save(user);
  }

  async update(id: string, user: User): Promise<UpdateResult> {
    return await this.userRepo.update(id, user);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepo.delete(id);
  }
}

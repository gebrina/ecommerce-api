import { Injectable } from "@nestjs/common";
import { User } from "src/interfaces/user.interface";

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      username: "ronald",
      email: "roanld@1.com",
      password: "ronald1",
    },
    {
      id: 2,
      username: "doe",
      email: "doe@2.com",
      password: "doe2",
    },
  ];

  constructor() {}

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id == id);
  }

  async findUserByName(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

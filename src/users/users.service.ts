import { Injectable } from '@nestjs/common';
import { User } from './IUser';

@Injectable()
export class UsersService {
  private readonly users = [{
    userId: 1,
    name: "Nilo Ferreira",
    username: "nilo",
    password: "123456",
    isActive: true
  }];
  async findOne(username: string): Promise<User | undefined>{
    return this.users.find(u => u.username === username);
  }
}

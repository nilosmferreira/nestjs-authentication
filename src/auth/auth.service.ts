import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/IUser';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService) { }
  async validateUser(username: string, password: string): Promise<any>{
    const user = await this.userService.findOne(username);
    
    if (user && user.password === password && user.isActive) {
      return  user;
    }
    return undefined;
  }
  login(user: User) {
    const payload = { username: user.username, name: user.name, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}

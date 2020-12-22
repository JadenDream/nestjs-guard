import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
	private readonly usersService: UsersService,
	private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne2(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  
  async login(user: any) {
    const payload = { username: user.userName, sub: user.id };
    if (payload.username === undefined){
      return {
        access_token: "",
      };
    }

    const ttoken = this.jwtService.sign(payload);
    return {
      access_token: ttoken,
    };
  }
}
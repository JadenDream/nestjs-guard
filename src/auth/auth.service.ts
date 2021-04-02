import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from './interfaces/i-jwt-payload';

@Injectable()
export class AuthService {
  constructor(
	private readonly usersService: UsersService,
	private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  
  async login(user: any) {
    console.log('user:', user);
    const payload: IJwtPayload = { userName: user.userName, userId: user.id, role: user.role };
    if (payload.userName === undefined){
      return {
        access_token: "",
      };
    }

    const ttoken = this.jwtService.sign(payload);
    return {
      token: ttoken,
    };
  }
}

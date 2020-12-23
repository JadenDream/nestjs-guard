import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IJwtPayload } from 'src/auth/interfaces/i-jwt-payload';
import { UsersService } from './users.service';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}
    
	@Get('userlist')
	getUsers(){
	    return this.usersService.findAll();
	}
	
	@Get('profile')
	getProfile(@Request() req){
		const { iat, exp, ...result } = req.user;;
	    return result;
	}
}

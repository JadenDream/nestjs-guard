import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/role-guard.provider';
import { SuperRoles } from 'src/auth/super-roles';
import { UsersService } from './users.service';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}
	
	@SuperRoles('vip')
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

import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}
    
    @UseGuards(AuthGuard('jwt'))
	@Get('userlist')
	getUsers(){
	    return this.usersService.findAll();
    }
    
    @UseGuards(AuthGuard('jwt'))
	@Get('profile')
	getProfile(@Request() req){
	    return req.user;
	}
}

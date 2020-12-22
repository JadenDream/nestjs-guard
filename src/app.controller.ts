import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
	constructor(
		private readonly authService: AuthService,
		private readonly usersService: UsersService
	) {}

	@UseGuards(LocalAuthGuard)
	@Post('auth/login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}
	
	@UseGuards(AuthGuard('jwt'))
	@Get('profile')
	getProfile(@Request() req){
	    return req.user;
	}
	
	@UseGuards(AuthGuard('jwt'))
	@Get('users')
	getUsers(){
	    return this.usersService.findAll();
	}
}

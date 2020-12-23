import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entitys/user.entity';

@Injectable()
export class UsersService {
  constructor(
	@InjectRepository(User)
	private usersRepository: Repository<User>
  ) {}
  
  async findAll(): Promise<User[]> {
      return this.usersRepository.find();
  }
	
	async findOne(findusername: string): Promise<User | undefined> {
		return this.usersRepository.findOne({ account: findusername});
	}
}

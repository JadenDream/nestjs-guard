import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entitys/user.entity';

export type User2 = any;

@Injectable()
export class UsersService {
  private readonly users: User2[];

  constructor(
	@InjectRepository(User)
	private usersRepository: Repository<User>
	
  ) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User2 | undefined> {
    return this.users.find(user => user.username === username);
  }
  
  	async findAll(): Promise<User[]> {
  	    return this.usersRepository.find();
  	}
	
	async findOne2(findusername: string): Promise<User | undefined> {
		return this.usersRepository.findOne({ account: findusername});
	}
}

// @Injectable()
// export class UsersService {
// 	constructor(
// 		@InjectRepository(User)
// 		private usersRepository: Repository<User>,
// 	) {}
	
// 	async findAll(): Promise<User[]> {
// 	    return this.usersRepository.find();
// 	}

// 	async findOne(id: string): Promise<User> {
// 		return this.usersRepository.findOne(id);
// 	}

// 	async remove(id: string): Promise<void> {
// 		await this.usersRepository.delete(id);
// 	}
// }

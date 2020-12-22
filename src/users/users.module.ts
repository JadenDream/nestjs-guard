import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { UsersController } from './users.controller';
import { User } from './entitys/user.entity';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}

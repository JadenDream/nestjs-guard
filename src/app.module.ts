import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entitys/user.entity';

@Module({
  imports: [
	  TypeOrmModule.forRoot({
			type: 'mysql',
			host: '127.0.0.1',
			port: 3306,
			username: 'admin', // MYSQL_USER
			password: 'admin', // MYSQL_PASSWORD
			database: 'test',  // MYSQL_DATABASE
			entities: [User],
			synchronize: true,
	      }),
		AuthModule, UsersModule
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

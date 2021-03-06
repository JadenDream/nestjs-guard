import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { RolesGuard } from './role-guard.provider';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.register({
	    secret: jwtConstants.secret,
	    signOptions: { expiresIn: '600s' },
		}),
		UsersModule, 
	],
	providers: [AuthService, LocalStrategy, JwtStrategy, RolesGuard],
	exports: [AuthService, RolesGuard],
	controllers: [AuthController],
})
export class AuthModule {}

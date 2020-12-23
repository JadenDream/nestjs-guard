import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { IJwtPayload } from './interfaces/i-jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtConstants.secret,
		});
	}

	/**
	 * JWT 策略，Passport 首先验证 JWT 的签名并解码 JSON 。然后调用我们的 validate() 方法，
	 * 该方法将解码后的 JSON 作为其单个参数传递。根据 JWT 签名的工作方式，
	 * 我们可以保证接收到之前已签名并发给有效用户的有效 token 令牌。
	 */
	async validate(payload: IJwtPayload) {
		return payload;
	}
}

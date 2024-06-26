import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
    constructor(

    ) {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField('refresh-token'),
            ignoreExpiration: false,
            secretOrKey: ''
        })
    }
}
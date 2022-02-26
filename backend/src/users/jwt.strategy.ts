/* eslint-disable prettier/prettier */
import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from "passport-jwt";
import { JwtPayload } from "./jwt.payload";
import { UserRepository } from "./users.repository";

export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(@InjectRepository(UserRepository) private userRepository: UserRepository,) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret',
        });
    }
    async validate(payload: JwtPayload) {
        const user = this.userRepository.findOne({ id: payload.id });

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
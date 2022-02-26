/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { ProfileDto } from "./dto/profile.dto";
import { JwtPayload } from "./jwt.payload";
import { UserRepository } from "./users.repository";

@Injectable()
export class UserServices {

    constructor(@InjectRepository(UserRepository) private userRepository: UserRepository, private jwtService: JwtService) { }


    signup(authCredentialsDto: AuthCredentialsDto) {
        return this.userRepository.signup(authCredentialsDto);
    }

    async signin(authCredentialsDto: AuthCredentialsDto) {
        const user = this.userRepository.signin(authCredentialsDto);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const payload: JwtPayload = {
            userEmail: authCredentialsDto.userEmail,
            id: (await user).id,
        };
        console.log("Signed in")
        const token = this.jwtService.sign(payload)
        console.log(token)
        return { token };
    }

    updateProfile(profileDto: ProfileDto) {
        return this.userRepository.updateProfile(profileDto);
    }

}
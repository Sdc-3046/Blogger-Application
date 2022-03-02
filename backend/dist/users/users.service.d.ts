import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "src/entity/user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { ProfileDto } from "./dto/profile.dto";
import { UserRepository } from "./users.repository";
export declare class UserServices {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signup(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signin(authCredentialsDto: AuthCredentialsDto): Promise<{
        token: string;
    }>;
    getUserProfile(userEmail: string): Promise<UserEntity>;
    updateProfile(profileDto: ProfileDto): Promise<UserEntity>;
}

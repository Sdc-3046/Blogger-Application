import { JwtService } from "@nestjs/jwt";
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
    updateProfile(profileDto: ProfileDto): Promise<import("../entity/user.entity").UserEntity>;
}

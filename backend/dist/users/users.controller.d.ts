import { UserEntity } from "src/entity/user.entity";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { ProfileDto } from "./dto/profile.dto";
import { UserServices } from "./users.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserServices);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        token: string;
    }>;
    updateProfile(profileDto: ProfileDto): Promise<UserEntity>;
    getUserProfile(userEmail: string): Promise<UserEntity>;
}

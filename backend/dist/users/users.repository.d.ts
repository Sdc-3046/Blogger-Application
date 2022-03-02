import { UserEntity } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import { ProfileDto } from "./dto/profile.dto";
export declare class UserRepository extends Repository<UserEntity> {
    signup(authCredentialsdto: AuthCredentialsDto): Promise<void>;
    signin(authCredentialsDto: AuthCredentialsDto): Promise<UserEntity>;
    getUserProfile(userEmail: string): Promise<UserEntity>;
    updateProfile(profileDto: ProfileDto): Promise<UserEntity>;
}

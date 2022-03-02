/* eslint-disable prettier/prettier */
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth.credentials.dto";
import * as crypto from 'crypto-js';
import { Body, NotFoundException } from "@nestjs/common";
import { use } from "passport";
import { validate } from "class-validator";
import { ProfileDto } from "./dto/profile.dto";
import { UserServices } from "./users.service";


@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{


    async signup(authCredentialsdto: AuthCredentialsDto) {
        const user = new UserEntity()

        user.firstName = authCredentialsdto.firstName;
        user.lastName = authCredentialsdto.lastName
        user.userEmail = authCredentialsdto.userEmail;
        user.userPassword = authCredentialsdto.userPassword;

        await user.save();
    }

    async signin(authCredentialsDto: AuthCredentialsDto) {

        const { firstName, lastName, userEmail, userPassword } = authCredentialsDto;

        //console.log(authCredentialsDto.userEmail)
        const user = this.findOne({ userEmail });
        //console.log(user)
        if (await user) {
            if ((await user).userPassword === authCredentialsDto.userPassword) {
                return await user;
            }
        }
        throw new NotFoundException('User not found');
    }

    async getUserProfile(userEmail: string) {

        const query = this.createQueryBuilder('users')

        query.andWhere('users.userEmail=:userEmail', { userEmail: userEmail })

        const targetuser = await query.getOne()

        if (targetuser) {
            return targetuser;
        }
        else {
            throw new NotFoundException;
        }
    }

    async updateProfile(profileDto: ProfileDto) {
        const { firstName, lastName, userEmail, userPassword, userCity, userState, userCountry, userPostalCode, userBirthDate, userGender } = profileDto;

        const user = await this.findOne({ userEmail });

        if (user) {
            if (firstName) {
                user.firstName = firstName;
            }
            if (lastName) {
                user.lastName = lastName;
            }
            if (userEmail) {
                user.userEmail = userEmail;
            }
            if (userPassword) {
                user.userPassword = userPassword;
            }
            if (userCity) {
                user.userCity = userCity;
            }
            if (userState) {
                user.userState = userState;
            }
            if (userCountry) {
                user.userCountry = userCountry;
            }
            if (userPostalCode) {
                user.userPostalCode = userPostalCode;
            }
            if (userBirthDate) {
                user.userBirthDate = userBirthDate;
            }
            if (userGender) {
                user.userGender = userGender;
            }
            user.save()
            return user;
        }
        else {
            throw new NotFoundException('User not found')
        }
    }
}
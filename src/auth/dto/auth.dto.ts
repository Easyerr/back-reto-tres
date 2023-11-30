import { IsEmail, IsInt } from "class-validator";

export class AuthDto {

    @IsEmail()
    email: string

    @IsInt()
    password: string
}
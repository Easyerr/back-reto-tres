import { IsEmail, IsInt } from "class-validator";

export class UserDto {

    
    @IsEmail()
    email: string;

    @IsInt()
    password: string;
}
import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/user/user.schema";
import { hash, compare } from "bcrypt";
import { UserDto } from "src/user/dto/user.dto";
import { AuthDocument } from "./auth.schema";
// import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

        constructor(private usersService: UserService, private jwtService: JwtService) { }


 async validateUser( username:string, pass:string): Promise<any> {
    const user = await this.usersService.findOne(username);
    
    if(user && compare(pass, user.password)) {
        const { password, ...result } = user;
        return result;
    }
    return null;
 }        

    async login(user: any) {
        
       const payload = {username: user.username, sub: user._id.toString()}
       
       return {
        access_token: this.jwtService.sign(payload)
       }

    }
}
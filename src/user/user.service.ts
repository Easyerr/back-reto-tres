import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { hash, compare } from "bcrypt";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}


    async findOne(username: string): Promise<User> {
        let user =await this.userModel.findOne({username}).lean()
        
        return user;
    }

    async getTodo(): Promise<any> {
        const users = await this.userModel.find().lean()
        return users;
    }

    async register (userInfo: any) {
        const { password } = userInfo
        const hashedPass = await hash(password, 10)
        userInfo = {...userInfo, password: hashedPass};
        return this.userModel.create(userInfo)

    }

    async editUser(editUser:any): Promise<any>{
        return await this.userModel.updateOne(editUser)
    }

    async eliminarUser(userEliminado: any): Promise<any> {
        return await this.userModel.deleteOne(userEliminado)
    }
}
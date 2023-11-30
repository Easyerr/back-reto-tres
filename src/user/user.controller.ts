import { Body, Controller,  Post, Get, Delete, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getTodo():Promise <any> {
        return await this.userService.getTodo()
    }

    @Post()
    async register(@Body() registerUser: any ): Promise<any> {
        return await this.userService.register(registerUser)
    }

    @Put()
    async updateInfo(@Body() userInfo: any) {
        return await this.userService.editUser(userInfo)
    }

    @Delete()
    async deleteUser(@Body() signOut: any) {
        return await this.userService.eliminarUser(signOut)
    }
}
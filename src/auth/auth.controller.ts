import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import{ AuthService } from './auth.service'
import { LocalAuthGuard } from "./local-auth.guard";
//import {UserDto}

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): any {
    

        return this.authService.login(req.user);
    }
}

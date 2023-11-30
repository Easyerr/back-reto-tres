import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";

import { MongooseModule } from "@nestjs/mongoose";
import { Auth, AuthSchema } from "./auth.schema"
import { AuthController } from "./auth.controller";
import { User, UserSchema } from "src/user/user.schema";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./jwtconstants";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [UserModule,PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '600s'}
    }), MongooseModule.forFeature([
        {
            name: Auth.name,
            schema: AuthSchema,
        }
    ])],
    controllers:[AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}

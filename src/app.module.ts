import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Congelador, CongeladorSchema } from './congelador/congelador.schema';
import { CongeladorModule } from './congelador/congelador.module';
import { UserModule } from './user/user.module';
import { User, UserSchema } from './user/user.schema';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Congelador'),
    MongooseModule.forFeature([
      {
        name: Congelador.name,
        schema: CongeladorSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      }
      ]),
      CongeladorModule, 
      UserModule, 
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

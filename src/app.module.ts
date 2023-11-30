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
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://bilbaobilbaoasier:${process.env.MONGODB_PWD}@cluster0.zodwqrf.mongodb.net/?retryWrites=true&w=majority`),
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

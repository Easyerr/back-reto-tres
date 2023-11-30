import { Module } from "@nestjs/common";
import { CongeladorService } from "./congelador.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Congelador, CongeladorSchema } from "./congelador.schema";
import { CongeladorController } from "./congelador.controller";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: Congelador.name,
            schema: CongeladorSchema,
        },
    ]),],
    controllers: [CongeladorController],
    providers: [CongeladorService]
})

export class CongeladorModule {}
import { Controller, Get, Post, Body, Put, Delete, Res, Param, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { CongeladorService } from "./congelador.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";


@Controller('congelador')
export class CongeladorController {
    constructor(private readonly congeladorService: CongeladorService) {}

    @UseGuards(JwtAuthGuard)
    @Get('all')
    getTodo(): any {
        return this.congeladorService.getTodo()
    }


      @Get('cajon/:cajon')
    async getCajones(@Res() res, @Param('cajon') cajon: number): Promise<any>{
        const cajones = await this.congeladorService.getElementosCajon(cajon)
        if (cajones.length === 0) {
            return res.status(HttpStatus.NOT_FOUND)
            .send('no hay cajones')
        }
        return res.status(HttpStatus.OK)
        .send(cajones)
    }  

    @Get('tipo/:tipo')
    async findTipo(@Res() res, @Param('tipo') tipo: string): Promise<any>{
        const tipoComida = await this.congeladorService.findTipo(tipo)
        if (tipoComida.length === 0) {
            return res.status(HttpStatus.NOT_FOUND)
            .send("no hay esto")
        }
        return res.status(HttpStatus.OK)
        .send(tipoComida)
    }
    
    @Put('add')
    async updateCajon(@Body() producto: any) {
        return await this.congeladorService.añadirElemento(producto)
    }

    @Put('eat/:cajonId')
    async eatFromCajon(@Param('cajonId') cajonId: string, @Body() producto: any) {
        console.log(producto);
        // return null;
        await this.congeladorService.eliminarElemento(cajonId, producto)

        
    } 
}
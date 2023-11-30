import { Body, Injectable } from "@nestjs/common";
import { Congelador, CongeladorDocument } from "./congelador.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId as mongooseOId } from "mongoose";
import { ObjectId } from "mongodb";

@Injectable()

export class CongeladorService{
    constructor(@InjectModel(Congelador.name) private congeladorModel: Model<CongeladorDocument>) {}

    async getTodo(): Promise <any[]> {
        const cajones = await this.congeladorModel.find().lean()
        return cajones
    }

   
    async getElementosCajon(cajon: number): Promise<any> {
        return await this.congeladorModel.findOne({ Cajon: cajon }).lean();
    }
    

   

    async findTipo(tipo: string): Promise <any> {
        const tipoComida = await this.getTodo();
        let arrayProductos = []
        tipoComida.forEach(cajon => {
            console.log(cajon);
            cajon.elementos.forEach(elemento => {
                if(elemento.tipo === tipo) {
                    arrayProductos.push(elemento)
                }
            })
        })
        return arrayProductos;
    }

    async añadirElemento(nuevoProducto:any): Promise<any> {
        nuevoProducto._id = new ObjectId();
       return await this.congeladorModel.updateOne({
        Cajon: nuevoProducto.ubicacion
       },{
        $push: {elementos: nuevoProducto}
       })
    }

    async eliminarElemento(cajonId: string, productoComido:any): Promise<any> {
        console.log(cajonId);
        
        
        console.log(productoComido);
        return await this.congeladorModel.findByIdAndUpdate(cajonId,{
            $pull: {elementos: productoComido}
        })
        
    }

}
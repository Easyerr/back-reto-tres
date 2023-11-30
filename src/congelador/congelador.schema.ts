import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Types } from "mongoose";
import { type } from "os";
import { Cajon } from "./cajon.schema";
import { ObjectId } from "mongodb";

export type CongeladorDocument = Congelador & Document

@Schema()
export class Congelador {

    @Prop()
    Cajon: number

    //Como es un array, pongo al lado de props lo que hay dentro
    @Prop([{ nombre: String, tipo: String, imagen: String, ubicacion: Number, in: String, out: String, cantidad: String, notas: String, _id: ObjectId}])
    elementos: Array<{ nombre: String, tipo: String, imagen: String, ubicacion: Number, in: String, out: String, cantidad: String, notas: String, _id: ObjectId}>
}
export const CongeladorSchema = SchemaFactory.createForClass(Congelador)

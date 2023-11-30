import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { Document } from "mongoose";
import { type } from "os";

export type CajonDocument = Cajon & Document

export class Cajon {

    @Prop({ required: true })
    nombre: String
    
    @Prop({ required: true })
    tipo: String
    
    @Prop({ required: true })
    imagen: String
    
    @Prop({ required: true })
    ubicacion: Number
    
    @Prop({})
    in:String
    
    @Prop({})
    out:String
    
    @Prop({ required: true })
    cantidad:Number
 
    @Prop({})
    notas:String
    
    @Prop({})
    _id:ObjectId
}
export const CajonSchema = SchemaFactory.createForClass(Cajon)
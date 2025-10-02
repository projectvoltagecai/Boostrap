import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ityping } from './typing.model';
import { typingDto } from './typing.DTO';


@Injectable()
export class typingService {

    constructor(@InjectModel('typing') private typingModel: Model<Ityping>){}
     saludo(): string {

        return "esta es la página de typing"
    }

  async creartyping(typing: typingDto){

       const resultado =new this.typingModel(typing)

       return await resultado.save()
    }

    async consultartyping(): Promise <Ityping[]>{
         return await this.typingModel.find().exec()

    }

    async eliminartyping(id:String){

        const respuesta= await this.typingModel.findByIdAndDelete(id)
        if (respuesta!=null)
            return respuesta
        else 
        return null

        
    }

    async actualizartyping(id:string, typing:typingDto){
        const respuesta = await this.typingModel.findByIdAndUpdate(id, typing).exec()
        if (respuesta!=null)
            return respuesta
        else 
        return null
        
    }


    }


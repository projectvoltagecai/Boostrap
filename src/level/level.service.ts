import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ILevel } from './Level.model';
import { LevelDto } from './Level.DTO';

@Injectable()
export class LevelService {

    constructor(@InjectModel('Level') private levelModel: Model<ILevel>){}

    saludo(): string{
        return "Esta es la ágina de Nivel"
    }

    async crearLevel(Level: LevelDto){

        const resultado =new this.levelModel(Level)

        return await resultado.save()
    }

    async consultarLevel(): Promise <ILevel[]>{
        return await this.levelModel.find().exec()

   }

   async eliminarLevel(id:String){

       const respuesta= await this.levelModel.findByIdAndDelete(id)
       if (respuesta!=null)
           return respuesta
       else 
       return null

       
   }

   async actualizarLevel(id:string, Level:LevelDto){
       const respuesta = await this.levelModel.findByIdAndUpdate(id, Level).exec()
       if (respuesta!=null)
           return respuesta
       else 
       return null
       
   }

}

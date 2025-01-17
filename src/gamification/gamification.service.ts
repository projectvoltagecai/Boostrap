import { Injectable } from '@nestjs/common';
import { GamificationDto } from './gamification.DTO';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IGamification } from './gamification.model';

@Injectable()
export class GamificationService {

    constructor(@InjectModel('Gamification') private gamificationModel: Model<IGamification>){}
     saludo(): string {

        return "esta es la página de Gamificación"
    }

  async crearGamification(Gamification: GamificationDto){

       const resultado =new this.gamificationModel(Gamification)

       return await resultado.save()
    }

    async consultarGamification(): Promise <IGamification[]>{
         return await this.gamificationModel.find().exec()

    }

    async eliminarGamification(id:String){

        const respuesta= await this.gamificationModel.findByIdAndDelete(id)
        if (respuesta!=null)
            return respuesta
        else 
        return null

        
    }

    async actualizarGamification(id:string, Gamification:GamificationDto){
        const respuesta = await this.gamificationModel.findByIdAndUpdate(id, Gamification).exec()
        if (respuesta!=null)
            return respuesta
        else 
        return null
        
    }


    }


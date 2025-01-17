import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISublevel } from './Sublevel.model';
import { SublevelDto } from './Sublevel.DTO';

@Injectable()
export class SublevelService {
    constructor(@InjectModel('Sublevel') private SublevelModel: Model<ISublevel>){}

    saludo(): string{
        return "Esta es la página de Subnivel"
    }

    async crearSubnivel(Sublevel: SublevelDto){

        const resultado =new this.SublevelModel(Sublevel)

        return await resultado.save()
    }

    
    async consultarSublevel(): Promise <ISublevel[]>{
        return await this.SublevelModel.find().exec()

   }

   async eliminarSublevel(id:String){

       const respuesta= await this.SublevelModel.findByIdAndDelete(id)
       if (respuesta!=null)
           return respuesta
       else 
       return null

       
   }

   async actualizarSublevel(id:string, Sublevel:SublevelDto){
       const respuesta = await this.SublevelModel.findByIdAndUpdate(id, Sublevel).exec()
       if (respuesta!=null)
           return respuesta
       else 
       return null
       
   }
}

import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Igap } from './gap.model';
import { InjectModel } from '@nestjs/mongoose';
import { gapDto } from './gap.DTO';



@Injectable()
export class GapService {

     constructor(@InjectModel('Gap') private GapModel: Model<Igap>){}
        
            saludo(): string{
            return "Esta es la ruta de rellenar"
            
            }
            
            async crearGap (Gap: gapDto){
            const resultado = new this.GapModel(Gap) 
            return await resultado.save()
            
            }
        
            async ConsultarGap(): Promise <Igap[]>{
                
            return await this.GapModel.find().exec()
            }
                
        
            async EliminarGap(id: string ){
                
            const respuesta= await this.GapModel.findByIdAndDelete(id)
                if(respuesta!=null)
                return respuesta
                else 
                return null
             }
                
            async ActualizarGap(id: string, Gap: gapDto){
                
            const respuesta = await this.GapModel.findByIdAndUpdate(id, Gap).exec()
                        
            if (respuesta!= null)
            return respuesta
            else 
            return null
         }
          
        
        
    
}
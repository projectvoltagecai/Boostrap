import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Itag } from './tag.model';
import { tagDto } from './tag.DTO';



@Injectable()
export class TagService {

    constructor(@InjectModel('Tag') private TagModel: Model<Itag>){}
    
        saludo(): string{
        return "Esta es la ruta de etiquetar"
        
        }
        
        async crearTag (Tag: tagDto){
        const resultado = new this.TagModel(Tag) 
        return await resultado.save()
        
        }
    
        async ConsultarTag(): Promise <Itag[]>{
            
        return await this.TagModel.find().exec()
        }
            
    
        async EliminarTag(id: string ){
            
        const respuesta= await this.TagModel.findByIdAndDelete(id)
            if(respuesta!=null)
            return respuesta
            else 
            return null
         }
            
        async ActualizarTag(id: string, Tag: tagDto){
            
        const respuesta = await this.TagModel.findByIdAndUpdate(id, Tag).exec()
                    
        if (respuesta!= null)
        return respuesta
        else 
        return null
     }
      
    
    
}
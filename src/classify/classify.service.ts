import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { IClassify} from './classify.model';
import { ClassifyDto } from './classify.DTO';



@Injectable()
export class ClassifyService {
    

    constructor(@InjectModel('Classify') private ClassifyModel: Model<IClassify>){}
            
                saludo(): string{
                return "Esta es la ruta de clasificar"
                
                }
                
                async crearClassify (Classify: ClassifyDto){
                const resultado = new this.ClassifyModel(Classify) 
                return await resultado.save()
                
                }
            
                async ConsultarClassify(): Promise <IClassify[]>{
                    
                return await this.ClassifyModel.find().exec()
                }
                    
            
                async EliminarClassify(id: string ){
                    
                const respuesta= await this.ClassifyModel.findByIdAndDelete(id)
                    if(respuesta!=null)
                    return respuesta
                    else 
                    return null
                }
                    
                async ActualizarClassify(id: string, Classify: ClassifyDto){
                    
                const respuesta = await this.ClassifyModel.findByIdAndUpdate(id, Classify).exec()
                            
                if (respuesta!= null)
                return respuesta
                else 
                return null
             }
              
}
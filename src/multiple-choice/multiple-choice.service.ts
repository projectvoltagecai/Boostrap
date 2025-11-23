import { Injectable } from '@nestjs/common';
import { IMultipleChoice } from './Multiple-choice.model';
import { MultipleChoiceDto } from './Multiple-choice.DTO';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MultipleChoiceService {
    constructor(@InjectModel('MultipleChoice') private multipleChoiceModel: Model<IMultipleChoice>){}
    
    saludo(): string{
       return "Esta es la ruta de  opción múltiple"
   }

   async crearMultipleChoice(MultipleChoice: MultipleChoiceDto){

       const resultado =new this.multipleChoiceModel(MultipleChoice)

       return await resultado.save()
   }

   //Nuevo creado con IA
   
//async createMultipleChoice(multipleChoice: MultipleChoiceDto)
//{ return new this.multipleChoiceModel(multipleChoice);

// } 

   
   async ConsultarMultipleChoice(): Promise <IMultipleChoice[]>{

       return await this.multipleChoiceModel.find().exec()
   }

   async EliminarMultipleChoice(id: string ){

       const respuesta= await this.multipleChoiceModel.findByIdAndDelete(id)
       if(respuesta!=null)
           return respuesta
       else 
       return null
   }

   async ActualizarMultipleChoice(id: string, MultipleChoice: MultipleChoiceDto){

       const respuesta = await this.multipleChoiceModel.findByIdAndUpdate(id, MultipleChoice).exec()
       
       if (respuesta!= null)
          return respuesta
       else 
       return null
   }
    
    }


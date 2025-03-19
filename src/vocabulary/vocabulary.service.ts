import { Injectable } from '@nestjs/common';
import { IVocabulary } from './vocabulary.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VocabularyDto } from './vocabulary.DTO';

@Injectable()
export class VocabularyService {

    constructor(@InjectModel('Vocabulary') private vocabularyModel: Model<IVocabulary>){}

    saludo(): string{

        return "esta es la página de Vocabulario"
    }

    async crearVocabulary(Vocabulary: VocabularyDto){

        const resultado =new this.vocabularyModel(Vocabulary)

       return await resultado.save()
   }

    async ConsultarVocabulary(): Promise <IVocabulary[]>{
   
           return await this.vocabularyModel.find().exec()
       }
   
       async EliminarVocabulary(id: string ){
   
           const respuesta= await this.vocabularyModel.findByIdAndDelete(id)
           if(respuesta!=null)
               return respuesta
           else 
           return null
       }
   
       async ActualizarVocabulary(id: string, Vocabulary : VocabularyDto){
   
           const respuesta = await this.vocabularyModel.findByIdAndUpdate(id, Vocabulary).exec()
           
           if (respuesta!= null)
              return respuesta
           else 
           return null
       }
}

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
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { VocabularyDto } from './vocabulary.DTO';

@Controller('vocabulary')
export class VocabularyController {

    constructor (private readonly vocabularyService: VocabularyService){}

    @Get()

    vocabularyHola(): string{

        return this.vocabularyService.saludo()
    }

    @Post()
  async create(@Body() Vocabulary : VocabularyDto){

    const respuesta = await this.vocabularyService.crearVocabulary(Vocabulary)
    return {ok: true, respuesta}
  }
}

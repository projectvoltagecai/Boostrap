import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Get('all')
  
  async Consultar(){
  return await this.vocabularyService.ConsultarVocabulary()
  
  }
  
    @Delete('/:id')
    async Eliminar(@Param('id') id: string){
  
    const vocabularioEliminado= await this.vocabularyService.EliminarVocabulary(id)
    if (vocabularioEliminado){
      return {ok:true, vocabularioEliminado}
  
  }
      return {ok: false, mensaje: "El vocabulario no existe"}
    }
  
    @Patch('/:id')
    async Actualizar(@Param('id')id: string,@Body() Vocabulary: VocabularyDto){
  
    const vocabularioActualizado = await this.vocabularyService.ActualizarVocabulary(id, Vocabulary)
  
     if(vocabularioActualizado){
        return {ok:true, vocabularioActualizado}
      }
     else 
      return {ok: false, mensaje: "El vocabulario no se puede actualizar porque no existe"}
    }
    
}

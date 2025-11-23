import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { VocabularyDto } from './vocabulary.DTO';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('vocabulary')
export class VocabularyController {

    constructor (private readonly vocabularyService: VocabularyService){}

    @Get()

    vocabularyHola(): string{

        return this.vocabularyService.saludo()
    }

   @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'Audio', maxCount: 1 },
      { name: 'Image', maxCount: 1 },
    ]),
  )
  create(
    @Body() vocabularyDto: VocabularyDto,
    @UploadedFiles() files: { Audio?: Express.Multer.File[], Image?: Express.Multer.File[] },
  ) {
    // Asignamos los buffers de los archivos al DTO
    if (files.Audio && files.Audio[0]) {
      vocabularyDto.Audio = files.Audio[0].buffer;
    }
    if (files.Image && files.Image[0]) {
      vocabularyDto.Image = files.Image[0].buffer;
    }

    // Llamamos al método del servicio
    return this.vocabularyService.create(vocabularyDto);
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

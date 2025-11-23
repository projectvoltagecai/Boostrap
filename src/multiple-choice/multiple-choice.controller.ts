import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MultipleChoiceService } from './multiple-choice.service';
import { MultipleChoiceDto } from './Multiple-choice.DTO';

@Controller('MultipleChoice')
export class MultipleChoiceController {

constructor (private readonly multipleChoiceservice: MultipleChoiceService){}

   @Get()
   MultipleChoiceHola(): string{
   return this.multipleChoiceservice.saludo()

  }

  @Post()
  async create(@Body() MultipleChoice : MultipleChoiceDto){

    const respuesta = await this.multipleChoiceservice.crearMultipleChoice(MultipleChoice)
    return {ok: true, respuesta}
  }

  @Get('all')

  async Consultar(){
    return await this.multipleChoiceservice.ConsultarMultipleChoice()

  }

  @Delete('/:id')
  async Eliminar(@Param('id') id: string){

    const MultipleChoiceEliminado= await this.multipleChoiceservice.EliminarMultipleChoice(id)
    if (MultipleChoiceEliminado){
      return {ok:true, MultipleChoiceEliminado}

    }
    return {ok: false, mensaje: "El ejercicio de opción múltiple no existe"}
  }

  @Patch('/:id')
  async Actualizar(@Param('id')id: string,@Body() MultipleChoice: MultipleChoiceDto){

    const MultipleChoiceActualizado = await this.multipleChoiceservice.ActualizarMultipleChoice(id, MultipleChoice)

    if(MultipleChoiceActualizado){
      return {ok:true, MultipleChoiceActualizado}
    }
    else 
    return {ok: false, mensaje: "El ejercicio opción múltiple no se puede actualizar porque no existe"}
  }

}




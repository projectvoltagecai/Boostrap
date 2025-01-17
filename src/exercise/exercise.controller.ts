import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseDto } from './exercise.DTO';

@Controller('exercise')
export class ExerciseController {

    constructor (private readonly exerciseService: ExerciseService){}

     @Get()

     exerciseHola(): string {
        return this.exerciseService.saludo()
    }

    @Post()
      async create(@Body() Exercise : ExerciseDto){

    const respuesta = await this.exerciseService.crearExercise(Exercise)
    return {ok: true, respuesta}
  }

  @Get('all')

  async Consultar(){
    return await this.exerciseService.ConsultarExercises()

  }

  @Delete('/:id')
  async Eliminar(@Param('id') id: string){

    const ejercicioEliminado= await this.exerciseService.EliminarExercise(id)
    if (ejercicioEliminado){
      return {ok:true, ejercicioEliminado}

    }
    return {ok: false, mensaje: "El ejercicio no existe"}
  }

  @Patch('/:id')
  async Actualizar(@Param('id')id: string,@Body() Exercise: ExerciseDto){

    const ejercicioActualizado = await this.exerciseService.ActualizarExercise(id, Exercise)

    if(ejercicioActualizado){
      return {ok:true, ejercicioActualizado}
    }
    else 
    return {ok: false, mensaje: "El ejercicio no se puede actualizar porque no existe"}
  }
}

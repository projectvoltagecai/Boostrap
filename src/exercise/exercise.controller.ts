import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseDto } from './exercise.DTO';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('exercise')
export class ExerciseController {

    constructor (private readonly exerciseService: ExerciseService){}

     @Get()

     exerciseHola(): string {
        return this.exerciseService.saludo()
    }

   
      @Post()
     @UseInterceptors(
       FileFieldsInterceptor([
         { name: 'Audio', maxCount: 1 },
         { name: 'Image', maxCount: 1 },
       ]),
     )
     create(
       @Body() exerciseDto: ExerciseDto,
       @UploadedFiles() files: { Audio?: Express.Multer.File[], Image?: Express.Multer.File[] },
     ) {
       // Asignamos los buffers de los archivos al DTO
       if (files.Audio && files.Audio[0]) {
         exerciseDto.Audio = files.Audio[0].buffer;
       }
       if (files.Image && files.Image[0]) {
         exerciseDto.Image = files.Image[0].buffer;
       }
   
       // Llamamos al método del servicio
       return this.exerciseService.create(exerciseDto);
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

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelDto } from './Level.DTO';

@Controller('level')
export class LevelController {

    constructor (private readonly levelService: LevelService){}

    @Get()

    levelHola(): string{

    return this.levelService.saludo()
        
    }

    @Post()
    async create(@Body() Level : LevelDto){

    const respuesta = await this.levelService.crearLevel(Level)
    return {ok: true, respuesta}
  }

  
   @Get('all')

 async buscarTodos(){

  return await this.levelService.consultarLevel()
 }

 @Delete('/:id')

 async eliminar(@Param('id')id:string){
  const levelEliminado = await this.levelService.eliminarLevel(id)
if (levelEliminado){
  return {Ok:true, levelEliminado}
  
}
return {ok:false, mensaje: "El nivel no existe"}
 }

 @Patch('/:id')

 async actualizar(@Param("id") id:string, @Body() Level: LevelDto){

  const levelActualizado = await this.levelService.actualizarLevel(id, Level)

  if (levelActualizado){
    return {ok: true, levelActualizado}
  }
  return {ok: false, mensaje: "El nivel no se pudo actualizar"}


 }

}

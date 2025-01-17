import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GamificationService } from './gamification.service';
import { GamificationDto } from './gamification.DTO';

@Controller('gamification')
export class GamificationController {

    constructor (private readonly gamificationService: GamificationService){}

     @Get()
     userHola(): string{
        return this.gamificationService.saludo()
    }

   @Post()
    async create(@Body() Gamification : GamificationDto){

    const respuesta = await this.gamificationService.crearGamification(Gamification)
   return {ok: true, respuesta}
 }

 @Get('all')

 async buscarTodos(){

  return await this.gamificationService.consultarGamification()
 }

 @Delete('/:id')

 async eliminar(@Param('id')id:string){
  const gamificationEliminado = await this.gamificationService.eliminarGamification(id)
if (gamificationEliminado){
  return {Ok:true, gamificationEliminado}
  
}
return {ok:false, mensaje: "La gamificación no existe"}
 }

 @Patch('/:id')

 async actualizar(@Param("id") id:string, @Body() Gamification: GamificationDto){

  const gamificationActualizado = await this.gamificationService.actualizarGamification(id, Gamification)

  if (gamificationActualizado){
    return {ok: true, gamificationActualizado}
  }
  return {ok: false, mensaje: "La gamification no se pudo actualizar"}


 }


}

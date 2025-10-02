import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { typingService } from './typing.service';
import {  typingDto } from './typing.DTO';

@Controller('typing')
export class typingController {

    constructor (private readonly typingService: typingService){}

   @Get()
    typingHola(): string{
        return this.typingService.saludo()
    }

   @Post()
    async create(@Body() typing : typingDto){

    const respuesta = await this.typingService.creartyping(typing)
   return {ok: true, respuesta}
 }

 @Get('all')

 async buscarTodos(){

  return await this.typingService.consultartyping()
 }

 @Delete('/:id')

 async eliminar(@Param('id')id:string){
  const typingEliminado = await this.typingService.eliminartyping(id)
if (typingEliminado){
  return {Ok:true, typingEliminado}
  
}
return {ok:false, mensaje: "typing no existe"}
 }

 @Patch('/:id')

 async actualizar(@Param("id") id:string, @Body() typing: typingDto){

  const typingActualizado = await this.typingService.actualizartyping(id, typing)

  if (typingActualizado){
    return {ok: true, typingActualizado}
  }
  return {ok: false, mensaje: "typing no se pudo actualizar"}


 }


}

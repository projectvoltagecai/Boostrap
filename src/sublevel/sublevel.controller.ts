import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SublevelService } from './sublevel.service';
import { SublevelDto } from './Sublevel.DTO';

@Controller('sublevel')
export class SublevelController {

    constructor (private readonly sublevelService: SublevelService){}

    @Get()

    SublevelHola(): string{
        return this.sublevelService.saludo()
    }

    @Post()

    async create(@Body() Sublevel: SublevelDto){

    
    const respuesta =  await this.sublevelService.crearSubnivel(Sublevel)
   
    return {ok: true, respuesta}
}

 
@Get('all')

async buscarTodos(){

 return await this.sublevelService.consultarSublevel()
}

@Delete('/:id')

async eliminar(@Param('id')id:string){
 const sublevelEliminado = await this.sublevelService.eliminarSublevel(id)
if (sublevelEliminado){
 return {Ok:true, sublevelEliminado}
 
}
return {ok:false, mensaje: "El subnivel no existe"}
}

@Patch('/:id')

async actualizar(@Param("id") id:string, @Body() Sublevel: SublevelDto){

 const sublevelActualizado = await this.sublevelService.actualizarSublevel(id, Sublevel)

 if (sublevelActualizado){
   return {ok: true, sublevelActualizado}
 }
 return {ok: false, mensaje: "El subnivel no se pudo actualizar"}


}
}

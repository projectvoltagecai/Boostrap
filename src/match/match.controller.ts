import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchDto } from './Match.DTO';

@Controller('Match')
export class MatchController {

    constructor (private readonly matchservice: MatchService){}
    
    @Get()
    MatchHola(): string{
        return this.matchservice.saludo()
    }

    @Post()

    async create(@Body()Match: MatchDto){

        const respuesta= await this.matchservice.crearMatch(Match) 
        return {ok: true, respuesta}
    }

    @Get('all')
    
      async Consultar(){
        return await this.matchservice.ConsultarMatch()
    
      }
    
      @Delete('/:id')
      async Eliminar(@Param('id') id: string){
    
        const matchEliminado= await this.matchservice.EliminarMatch(id)
        if (matchEliminado){
          return {ok:true, matchEliminado}
    
        }
        return {ok: false, mensaje: "El ejercicio de emparejar no existe"}
      }
    
      @Patch('/:id')
      async Actualizar(@Param('id')id: string,@Body() Match: MatchDto){
    
        const MatchActualizado = await this.matchservice.ActualizarMatch(id, Match)
    
        if(MatchActualizado){
          return {ok:true, MatchActualizado}
        }
        else 
        return {ok: false, mensaje: "El ejercicio emparejar no se puede actualizar porque no existe"}
      }
    
    
}

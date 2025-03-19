import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GapService } from './gap.service';
import { gapDto } from './gap.DTO';

@Controller('gap')
export class GapController {

  constructor (private readonly gapservice: GapService){}
        
        @Get()
        GapHola(): string{
        return this.gapservice.saludo()
        }
    
        @Post()
    
        async create(@Body() Gap: gapDto){
    
        const respuesta= await this.gapservice.crearGap(Gap) 
        return {ok: true, respuesta}
        }
    
        @Get('all')
        
        async Consultar(){
        return await this.gapservice.ConsultarGap()
        
        }
        
        @Delete('/:id')
        async Eliminar(@Param('id') id: string){
        
            const gapEliminado= await this.gapservice.EliminarGap(id)
            if (gapEliminado){
            return {ok:true, gapEliminado}
        
        }
            return {ok: false, mensaje: "El ejercicio de rellenar no existe"}
        }
        
          @Patch('/:id')
          async Actualizar(@Param('id')id: string,@Body() Gap: gapDto){
        
            const gapActualizado = await this.gapservice.ActualizarGap(id, Gap)
        
            if(gapActualizado){
              return {ok:true, gapActualizado}
            }
            else 
            return {ok: false, mensaje: "El ejercicio rellenar no se puede actualizar porque no existe"}
          }
        
        


}

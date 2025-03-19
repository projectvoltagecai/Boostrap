import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { tagDto } from './tag.DTO';

@Controller('tag')
export class TagController {


    constructor (private readonly tagservice: TagService){}
        
        @Get()
        TagHola(): string{
            return this.tagservice.saludo()
        }
    
        @Post()
    
        async create(@Body() Tag: tagDto){
    
            const respuesta= await this.tagservice.crearTag(Tag) 
            return {ok: true, respuesta}
        }
    
        @Get('all')
        
          async Consultar(){
            return await this.tagservice.ConsultarTag()
        
          }
        
          @Delete('/:id')
          async Eliminar(@Param('id') id: string){
        
            const tagEliminado= await this.tagservice.EliminarTag(id)
            if (tagEliminado){
              return {ok:true, tagEliminado}
        
            }
            return {ok: false, mensaje: "El ejercicio de etiquetar no existe"}
          }
        
          @Patch('/:id')
          async Actualizar(@Param('id')id: string,@Body() Tag: tagDto){
        
            const TagActualizado = await this.tagservice.ActualizarTag(id, Tag)
        
            if(TagActualizado){
              return {ok:true, TagActualizado}
            }
            else 
            return {ok: false, mensaje: "El ejercicio etiquetar no se puede actualizar porque no existe"}
          }
        
        
}

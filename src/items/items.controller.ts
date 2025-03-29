import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { itemsDto } from './items.DTO';

@Controller('items')
export class ItemsController {




  constructor (private readonly Itemsservice: ItemsService){}
        
        @Get()
        ItemsHola(): string{
        return this.Itemsservice.saludo()
        }
    
        @Post()
    
        async create(@Body() Items: itemsDto){
    
        const respuesta= await this.Itemsservice.crearItems(Items) 
        return {ok: true, respuesta}
        }
    
        @Get('all')
        
        async Consultar(){
        return await this.Itemsservice.ConsultarItems()
        
        }
        
        @Delete('/:id')
        async Eliminar(@Param('id') id: string){
        
            const itemsEliminado= await this.Itemsservice.EliminarItems(id)
            if (itemsEliminado){
            return {ok:true, itemsEliminado}
        
        }
            return {ok: false, mensaje: "El item no existe"}
        }
        
          @Patch('/:id')
          async Actualizar(@Param('id')id: string,@Body() Items: itemsDto){
        
            const itemsActualizado = await this.Itemsservice.ActualizarItems(id, Items)
        
            if(itemsActualizado){
              return {ok:true, itemsActualizado}
            }
            else 
            return {ok: false, mensaje: "El items no se puede actualizar porque no existe"}
          }
        
    





}

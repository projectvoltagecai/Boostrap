import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClassifyService } from './classify.service';
import { ClassifyDto } from './classify.DTO';

@Controller('classify')
export class ClassifyController {

constructor (private readonly classifyservice: ClassifyService){}
        
        @Get()
        ClassifyHola(): string{
            return this.classifyservice.saludo()
        }
    
        @Post()
    
        async create(@Body() Classify: ClassifyDto){
    
            const respuesta= await this.classifyservice.crearClassify(Classify) 
            return {ok: true, respuesta}
        }
    
        @Get('all')
        
          async Consultar(){
            return await this.classifyservice.ConsultarClassify()
        
          }
        
          @Delete('/:id')
          async Eliminar(@Param('id') id: string){
        
            const classifyEliminado= await this.classifyservice.EliminarClassify(id)
            if (classifyEliminado){
            return {ok:true, classifyEliminado}
        
            }
           return {ok: false, mensaje: "El ejercicio de clasificar no existe"}
          }
        
          @Patch('/:id')
          async Actualizar(@Param('id')id: string,@Body() Classify: ClassifyDto){
        
            const classifyActualizado = await this.classifyservice.ActualizarClassify(id, Classify)
        
            if(classifyActualizado){
              return {ok:true, classifyActualizado}
            }
            else 
            return {ok: false, mensaje: "El ejercicio clasificar no se puede actualizar porque no existe"}
          }
        
        



}

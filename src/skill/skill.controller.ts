import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillDto } from './Skill.DTO';

@Controller('skill')
export class SkillController {

    constructor(private readonly skillservice:SkillService){}

@Get()

    SkillHola(): string{

        return this.skillservice.saludo()
    }

   @Post()

  async  create(@Body() skilldto: SkillDto){

  const respuesta = await this.skillservice.crearSkill(skilldto)
   return {ok: true, respuesta}
  }
   
@Get('all')

async buscarTodos(){

 return await this.skillservice.consultarSkill()
}

@Delete('/:id')

async eliminar(@Param('id')id:string){
 const skillEliminado = await this.skillservice.eliminarSkill(id)
if (skillEliminado){
 return {Ok:true, skillEliminado}
 
}
return {ok:false, mensaje: "El nivel no existe"}
}

@Patch('/:id')

async actualizar(@Param("id") id:string, @Body() Skill: SkillDto){

 const skillActualizado = await this.skillservice.actualizarSkill(id, Skill)

 if (skillActualizado){
   return {ok: true, skillActualizado}
 }
 return {ok: false, mensaje: "La habilidad no se pudo actualizar"}


}
}



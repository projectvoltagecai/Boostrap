import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamDto } from './Exam.DTO';

@Controller('exam')
export class ExamController {

    constructor (private readonly examService: ExamService){}

    @Get()

    examHola(): string{
        return this.examService.saludo()
    }

    @Post()

    async create(@Body() Exam: ExamDto){

        const respuesta= await this.examService.crearExam(Exam)

        return {ok: true, respuesta}
    }

    @Get('all')

    async Consultar(){
      return await this.examService.ConsultarExams()
  
    }
  
    @Delete('/:id')
    async Eliminar(@Param('id') id: string){
  
      const examenEliminado= await this.examService.EliminarExam(id)
      if (examenEliminado){
        return {ok:true, examenEliminado}
  
      }
      return {ok: false, mensaje: "El examen no existe"}
    }
  
    @Patch('/:id')
    async Actualizar(@Param('id')id: string,@Body() Exam: ExamDto){
  
      const examenActualizado = await this.examService.ActualizarExam(id, Exam)
  
      if(examenActualizado){
        return {ok:true, examenActualizado}
      }
      else 
      return {ok: false, mensaje: "El examen no se puede actualizar porque no existe"}
    }
}

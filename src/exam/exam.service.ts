import { Injectable } from '@nestjs/common';
import { IExam } from './exam.model';
import { InjectModel } from '@nestjs/mongoose';
import { ExamDto } from './Exam.DTO';
import { Model } from 'mongoose';

@Injectable()
export class ExamService {
    constructor(@InjectModel('Exam') private examModel: Model<IExam>){}

    saludo(): string{

        return "Esta es la página de Examen"
    }

    async crearExam(Exam : ExamDto){

        const resultado = new this.examModel(Exam)

        return await resultado.save()
    }


    async ConsultarExams(): Promise <IExam[]>{

        return await this.examModel.find().exec()
    }

    async EliminarExam(id: string ){

        const respuesta= await this.examModel.findByIdAndDelete(id)
        if(respuesta!=null)
            return respuesta
        else 
        return null
    }

    async ActualizarExam(id: string, Exam: ExamDto){

        const respuesta = await this.examModel.findByIdAndUpdate(id, Exam).exec()
        
        if (respuesta!= null)
           return respuesta
        else 
        return null
    }
}



import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IExercise } from './exercise.model';
import { ExerciseDto } from './exercise.DTO';

@Injectable()
export class ExerciseService {

    constructor(@InjectModel('Exercise') private exerciseModel: Model<IExercise>){}

     saludo(): string {

        return "Esta es la página de Ejercicio"
    }

    async crearExercise(Exercise: ExerciseDto){

        const resultado =new this.exerciseModel(Exercise)

        return await resultado.save()
    }

    async ConsultarExercises(): Promise <IExercise[]>{

        return await this.exerciseModel.find().exec()
    }

    async EliminarExercise(id: string ){

        const respuesta= await this.exerciseModel.findByIdAndDelete(id)
        if(respuesta!=null)
            return respuesta
        else 
        return null
    }

    async ActualizarExercise(id: string, Exercise: ExerciseDto){

        const respuesta = await this.exerciseModel.findByIdAndUpdate(id, Exercise).exec()
        
        if (respuesta!= null)
           return respuesta
        else 
        return null
    }
}

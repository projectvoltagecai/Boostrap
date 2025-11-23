import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IExercise } from './exercise.model';
import { ExerciseDto } from './exercise.DTO';

@Injectable()
export class ExerciseService {    private readonly logger = new Logger(ExerciseService.name);

    constructor(@InjectModel('Exercise') private exerciseModel: Model<IExercise>){}

     saludo(): string {

        return "Esta es la página de Ejercicio"
    }

   async create(exerciseDto: ExerciseDto): Promise<any> {
        
    (exerciseDto);
        const newexerciseEntry = new this.exerciseModel(exerciseDto);
       return await newexerciseEntry.save();
        
       }

        

    async ConsultarExercises(): Promise <IExercise[]>{

        return await this.exerciseModel.find()
        .populate("level")
        .populate("sublevel")
        .exec()
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

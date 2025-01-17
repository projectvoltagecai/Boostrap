import { Injectable } from '@nestjs/common';
import { ProgressDto } from './Progress.DTO';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProgress } from './Progress.model';
import { exec } from 'child_process';

@Injectable()
export class ProgressService {

    constructor(@InjectModel('Progress')  private progressModel:Model<IProgress>){}

    saludo(): string{

        return "Esta es la página de Progreso"
    }

   async  crearProgress(Progress: ProgressDto){

   const resultado =new this.progressModel(Progress)

   return await resultado.save()
}

 async ConsultarProgress(): Promise<IProgress[]>{

    return await this.progressModel.find().exec()
}

 async EliminarProgress(id: string){
const respuesta= await this.progressModel.findByIdAndDelete(id).exec()
if (respuesta != null)
    return respuesta
else return null

}

async ActualizarProgress(id: string, Progress: ProgressDto){

    const respuesta = await this.progressModel.findByIdAndUpdate(id, Progress).exec()

    if(respuesta!=null)
        return respuesta
else 
return null
}


}

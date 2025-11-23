import { Injectable } from '@nestjs/common';
import { SkillDto } from './Skill.DTO';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISkill } from './Skill.model';

@Injectable()
export class SkillService {

    constructor(@InjectModel('Skill') private skillModel:Model<ISkill>){}

    saludo():string{

        return "Esta es la página de Habilidades"
    }

   async crearSkill(skilldto: SkillDto): Promise<any>{

        const resultado = new this.skillModel(skilldto)

        return resultado.save()

   }

   async consultarSkill(): Promise <ISkill[]>{
    return await this.skillModel.find().exec()

}

async eliminarSkill(id:String){

   const respuesta= await this.skillModel.findByIdAndDelete(id)
   if (respuesta!=null)
       return respuesta
   else 
   return null

   
}

async actualizarSkill(id:string, Skill:SkillDto){
   const respuesta = await this.skillModel.findByIdAndUpdate(id, Skill).exec()
   if (respuesta!=null)
       return respuesta
   else 
   return null
   
}


}

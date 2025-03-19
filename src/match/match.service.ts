import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { IMatch } from './Match.model';
import { MatchDto } from './Match.DTO';
import { Model } from 'mongoose';



@Injectable()
export class MatchService {

    constructor(@InjectModel('Match') private MatchModel: Model<IMatch>){}

    saludo(): string{
    return "Esta es la ruta de emparejar"
    
    }
    
    async crearMatch (Match: MatchDto){
    const resultado = new this.MatchModel(Match) 
    return await resultado.save()
    
    }

    async ConsultarMatch(): Promise <IMatch[]>{
        
    return await this.MatchModel.find().exec()
    }
        

    async EliminarMatch(id: string ){
        
    const respuesta= await this.MatchModel.findByIdAndDelete(id)
        if(respuesta!=null)
        return respuesta
        else 
        return null
     }
        
    async ActualizarMatch(id: string, Match: MatchDto){
        
    const respuesta = await this.MatchModel.findByIdAndUpdate(id, Match).exec()
                
    if (respuesta!= null)
    return respuesta
    else 
    return null
 }
  

}

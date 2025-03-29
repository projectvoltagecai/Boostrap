import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { IItems } from "./items.model"
import { itemsDto } from "./items.DTO"

@Injectable()
export class ItemsService {

     constructor(@InjectModel('Items') private ItemsModel: Model<IItems>){}
        
            saludo(): string{
            return "Esta es la ruta de Items"
            
            }
            
            async crearItems (Items: itemsDto){
            const resultado = new this.ItemsModel(Items) 
            return await resultado.save()
            
            }
        
            async ConsultarItems(): Promise <IItems[]>{
                
            return await this.ItemsModel.find().exec()
            }
                
        
            async EliminarItems(id: string ){
                
            const respuesta= await this.ItemsModel.findByIdAndDelete(id)
                if(respuesta!=null)
                return respuesta
                else 
                return null
             }
                
            async ActualizarItems(id: string, Items: itemsDto){
                
            const respuesta = await this.ItemsModel.findByIdAndUpdate(id, Items).exec()
                        
            if (respuesta!= null)
            return respuesta
            else 
            return null
         }
          
        
        
    
}
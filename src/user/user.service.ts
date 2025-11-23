import { Injectable } from '@nestjs/common';
import { IUser } from './user.model';
import { UserDto } from './user.DTO';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<IUser>){}

     saludo(): string{
        return "Esta es la ruta de estudiante o Usuario"
    }

    async create(userDto: UserDto): Promise<any> {
        (userDto);
        const newUserEntry = new this.userModel(userDto);
        return await newUserEntry.save();
        
        }

    async ConsultarUsers(): Promise <IUser[]>{

        return await this.userModel.find().exec()
    }

    async EliminarUser(id: string ){

        const respuesta= await this.userModel.findByIdAndDelete(id)
        if(respuesta!=null)
            return respuesta
        else 
        return null
    }

    async ActualizarUser(id: string, User: UserDto){

        const respuesta = await this.userModel.findByIdAndUpdate(id, User).exec()
        
        if (respuesta!= null)
           return respuesta
        else 
        return null
    }
}




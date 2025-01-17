import { Inject, Injectable } from '@nestjs/common';
import { IUser } from './user.model';
import { UserDto } from './user.DTO';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


export class UserService {

    constructor(@InjectModel('User') private userModel: Model<IUser>){}

     saludo(): string{
        return "Esta es la ruta de estudiante o Usuario"
    }

    async crearUser(User: UserDto){

        const resultado =new this.userModel(User)

        return await resultado.save()
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




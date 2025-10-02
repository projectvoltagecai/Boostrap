import mongoose from "mongoose"; 

export const UserSchema = new mongoose.Schema({

Name:String,
Surname: String,
User: String,
Mail: String, 
Password: String,
Avatar: Buffer,
Program: String,
Ficha: String, 
Identification: Number,

})

export interface IUser extends mongoose.Document {

Name: string; 
Surname: string; 
User: string; 
Mail: string; 
Password: string; 
Avatar: Buffer; 
Program: string; 
Ficha: string; 
Identification: number; 

}
import mongoose from "mongoose"; 

export const UserSchema = new mongoose.Schema({

Name:String,
Surname: String,
User: String,
mail: String, 
Password: String,

})

export interface IUser extends mongoose.Document {

Name: string; 
Surname: string; 
User: string; 
mail: string; 
Password: string; 

}
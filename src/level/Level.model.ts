import mongoose from "mongoose"; 

export const LevelSchema= new mongoose.Schema({
 
 topic: String, 


})

export interface ILevel extends mongoose.Document{


topic: string; 

}
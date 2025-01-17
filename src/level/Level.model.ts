import mongoose from "mongoose"; 

export const LevelSchema= new mongoose.Schema({
 idlevel: Number, 
 topic: String, 


})

export interface ILevel extends mongoose.Document{

idlevel: number; 
topic: string; 

}
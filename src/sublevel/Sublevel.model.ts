import mongoose from "mongoose"; 

export const SublevelSchema= new mongoose.Schema({
 idSublevel: Number, 
 topic: String, 


})

export interface ISublevel extends mongoose.Document{

idSublevel: number; 
topic: string; 

}
import mongoose from "mongoose"; 

export const SublevelSchema= new mongoose.Schema({
 
 topic: String, 
})

export interface ISublevel extends mongoose.Document{


topic: string; 
}
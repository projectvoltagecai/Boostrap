import mongoose from "mongoose"; 
import { ILevel } from "src/level/Level.model";
import { ISublevel } from "src/sublevel/Sublevel.model";

export const ExamSchema = new mongoose.Schema({

Question: String, 
Answer: String, 
Points: Number, 
Level: [{type: mongoose.SchemaTypes.ObjectId, ref: "Level"}],
Sublevel: [{type: mongoose.SchemaTypes.ObjectId, ref: "Sublevel"}], 
Audio: Buffer, 
Image: Buffer, 
Text: String


})

export interface IExam extends mongoose.Document{
    
Question: string; 
Answer: string;
Points: Number;
Level: ILevel[];
Sublevel: ISublevel[]; 
Audio: Buffer; 
Image: Buffer; 
Text: string

} 

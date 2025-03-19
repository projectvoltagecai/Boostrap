import mongoose from "mongoose"; 

export const ExamSchema = new mongoose.Schema({

Question: String, 
Answer: String, 
Points: Number, 
Level: String, 
Sublevel: String,
Audio: Buffer, 
Img: Buffer, 
Text: String


})

export interface IExam extends mongoose.Document{
    
Question: string; 
Answer: string;
Points: Number;
Level: string;
Sublevel: string; 
Audio: Buffer; 
Img: Buffer; 
Text: string

} 

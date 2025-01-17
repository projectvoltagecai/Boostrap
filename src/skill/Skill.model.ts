import mongoose from "mongoose"; 

export const SkillSchema= new mongoose.Schema({
    id: Number, 
    TypeofSkill: String, 
    Audio: Buffer, 
    Image: String,
    Text: String, 
   
   })
   
   export interface ISkill extends mongoose.Document{
   
    id: Number; 
    TypeofSkill: String; 
    Audio: Buffer; 
    Image: String; 
    Text: String; 
   }
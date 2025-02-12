import mongoose from "mongoose"; 

export const SkillSchema= new mongoose.Schema({
    
    TypeofSkill: String, 
    
   
   })
   
   export interface ISkill extends mongoose.Document{
   
    TypeofSkill: String; 
    
   }
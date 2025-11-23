import mongoose from "mongoose"; 

export const SkillSchema= new mongoose.Schema({
    
    Skill: String, 
    
   
   })
   
   export interface ISkill extends mongoose.Document{
   
    Skill: String; 
    
   }
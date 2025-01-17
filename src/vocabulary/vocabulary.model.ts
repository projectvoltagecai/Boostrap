import mongoose from "mongoose";

export const VocabularySchema = new mongoose.Schema({

id: Number,
ObjectName: String, 
Audio: Buffer, 
IPA: String, 
Image: Buffer,  
Description: String,  
Level: String, 
Sublevel: String,  


})

export interface IVocabulary extends mongoose.Document{
    
id: number; 
ObjectName: string; 
Audio: Buffer; 
IPA: string; 
Image: Buffer; 
Description: String; 
Level: String; 
Sublevel: String; 


}


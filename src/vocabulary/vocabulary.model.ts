import mongoose from "mongoose";

export const VocabularySchema = new mongoose.Schema({


ObjectName: String, 
Audio: Buffer, 
IPA: String, 
Image: Buffer,  
Description: String,  
Level: {type: mongoose.SchemaTypes.ObjectId, ref: "Level"},
Sublevel: {type: mongoose.SchemaTypes.ObjectId, ref: "Sublevel"},  
})

export interface IVocabulary extends mongoose.Document{
    
ObjectName: string; 
Audio: Buffer; 
IPA: string; 
Image: Buffer; 
Description: String; 
Level: []; 
Sublevel: []; 

}


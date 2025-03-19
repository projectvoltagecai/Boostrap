import mongoose from "mongoose"; 

export const classifySchema = new mongoose.Schema({
    word1: String, 
    word2: String,
    word3: String,
    word4: String,
    orderfield1: String,
    orderfield2: String,
    orderfield3: String,
    orderfield4: String,

})

export interface IClassify extends mongoose.Document{

    word1: string; 
    word2: string; 
    word3: string; 
    word4: string; 
    orderfield1: string; 
    orderfield2: string; 
    orderfield3: string; 
    orderfield4: string; 

}
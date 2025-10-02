import mongoose from "mongoose"; 

export const classifySchema = new mongoose.Schema({
    elemento1: {word1: String, word2: String, word3: String, word4: String, category1: String}, 
   
     

})

export interface IClassify extends mongoose.Document{

    elemento1: {word1: string, word2: string, word3: string, word4: string, category1: string}; 
   
   

}
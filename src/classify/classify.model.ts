import mongoose from "mongoose"; 

export const classifySchema = new mongoose.Schema({
    elemento1: {word1: String, word2: String, word3: String, word4: String, category1: String}, 
    elemento2: {word1: String, word2: String, word3: String, word4: String, category2: String},
    elemento3: {word1: String, word2: String, word3: String, word4: String, category3: String},
    elemento4: {word1: String, word2: String, word3: String, word4: String, category4: String}, 

})

export interface IClassify extends mongoose.Document{

    elemento1: {word1: string, word2: string, word3: string, word4: string, category1: string}; 
    elemento2: {word1: string, word2: string, word3: string, word4: string, category2: string}; 
    elemento3: {word1: string, word2: string, word3: string, word4: string, category3: string}; 
    elemento4: {word1: string, word2: string, word3: string, word4: string, category4: string}; 

}
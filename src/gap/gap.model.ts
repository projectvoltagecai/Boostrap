import mongoose from "mongoose"; 

export const gapSchema = new mongoose.Schema({

text: String,
word1: String, 
word2: String,
word3: String,
word4: String,




})

export interface Igap extends mongoose.Document{

text: string; 
word1: string; 
word2: string; 
word3: string; 
word4: string; 
}
import mongoose from "mongoose"; 

export const ItemsSchema = new mongoose.Schema({

    Question: String,
    Option1: String,
    Option2: String, 
    Option3: String, 
    CorrectAnswer: String,
    Audio: Buffer,

})

export interface IItems extends mongoose.Document {

    Question: string; 
    Option1: string; 
    Option2: string; 
    Option3: string; 
    CorrectAnswer: string;
    Audio: Buffer; 

}
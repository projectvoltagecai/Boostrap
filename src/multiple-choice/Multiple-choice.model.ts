import mongoose from "mongoose"; 

export const MultipleChoiceSchema = new mongoose.Schema({

    Question: String,
    Option1: String,
    Option2: String, 
    Option3: String, 
    Option4: String,
    Audio: Buffer,

})

export interface IMultipleChoice extends mongoose.Document {

    Question: string; 
    Option1: string; 
    Option2: string; 
    Option3: string; 
    Option4: string;
    Audio: Buffer; 

}
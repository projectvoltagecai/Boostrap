import mongoose from "mongoose"; 

export const MultipleChoiceSchema = new mongoose.Schema({

    Instruction: String,
    Text: String,
    Items: [{type: mongoose.SchemaTypes.ObjectId, ref: "Items"}],
    Level: [{type: mongoose.SchemaTypes.ObjectId, ref: "Level"}],
    Skill: [{type: mongoose.SchemaTypes.ObjectId, ref: "Skill"}],
    Audio: Buffer,

})

export interface IMultipleChoice extends mongoose.Document {

    Instruction: string; 
    Text: string; 
    Items: []; 
    Level: []; 
    Skill: [];
    Audio: Buffer; 

}
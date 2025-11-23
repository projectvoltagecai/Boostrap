import mongoose from "mongoose"; 
import { IItems } from "src/items/items.model";

export const MultipleChoiceSchema = new mongoose.Schema({

    
    Text: String,
    Items: [{type: mongoose.SchemaTypes.ObjectId, ref: "Items"}],
    Audio: Buffer,

})

export interface IMultipleChoice extends mongoose.Document {

 
    Text: string; 
    Items: [IItems]; 
    Audio: Buffer; 

}
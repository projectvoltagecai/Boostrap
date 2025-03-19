import mongoose from "mongoose"; 

export const tagSchema = new mongoose.Schema({

    Image: Buffer, 
    Writingfield1: String,
    Writingfield2: String,
    Writingfield3: String,
    Writingfield4: String,
    Audio: Buffer,
})

export interface Itag extends mongoose.Document {

    Image: Buffer; 
    Writingfield1: String; 
    Writingfield2: String; 
    Writingfield3: String; 
    Writingfield4: String; 
    Audio: Buffer; 

}
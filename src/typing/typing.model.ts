import mongoose from "mongoose";


export const typingSchema = new mongoose.Schema({
    img1: Buffer,
    img2: Buffer, 
    img3: Buffer,
    word1: String, 
    word2: String, 
    word3: String,

})

export interface Ityping extends mongoose.Document{
    img1: Buffer; 
    img2: Buffer; 
    img3: Buffer; 
    word1: string; 
    word2: string; 
    word3: string; 

}
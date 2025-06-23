
import mongoose from "mongoose"; 

export const MatchSchema = new mongoose.Schema({

    img1: Buffer, 
    img2: Buffer,
    img3: Buffer, 
    img4: Buffer, 
    img5: Buffer, 
    word1: String, 
    word2: String,  
    word3: String, 
    word4: String, 
    word5: String, 
    def1: String,
    def2: String,
    def3: String,
    def4: String,   
    def5: String,   
})

export interface IMatch extends mongoose.Document {

    img1: Buffer; 
    img2: Buffer;
    img3: Buffer; 
    img4: Buffer; 
    img5: Buffer; 
    word1: string; 
    word2: string; 
    word3: string; 
    word4: string; 
    word5: string; 
    def1: String; 
    def2: String;
    def3: String; 
    def4: string;  
    def5: string;  

}
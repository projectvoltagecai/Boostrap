import mongoose from "mongoose";

export const GamificationSchema = new mongoose.Schema({
 Points: Number,
 Medals: Buffer, 
 Avatar: Buffer, 
 Streak: String,
 Level: Number,
 Sublevel: String, 
 Lives: Number, 

})

export interface IGamification extends mongoose.Document{
 Points: Number; 
 Medals: Buffer; 
 Avatar: Buffer; 
 Streak: string; 
 Level: Number; 
 Sublevel: String; 
 Lives: Number; 

}
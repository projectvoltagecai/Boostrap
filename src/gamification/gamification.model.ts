import mongoose from "mongoose";

export const GamificationSchema = new mongoose.Schema({
 Points: Number,
 Medals: String, 
 Avatar: String, 
 Streak: String,
 Level: Number,
 Sublevel: String, 
 Lifes: String, 

})

export interface IGamification extends mongoose.Document{
 Points: Number; 
 Medals: String; 
 Avatar:String; 
 Streak: string; 
 Level: Number; 
 Sublevel: String; 
 Lifes:String; 

}
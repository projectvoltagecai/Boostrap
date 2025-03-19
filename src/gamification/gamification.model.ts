import mongoose from "mongoose";
import { SublevelDto } from "src/sublevel/Sublevel.DTO";

export const GamificationSchema = new mongoose.Schema({
 Points: [{type: mongoose.SchemaTypes.ObjectId, ref: "Progress"}],
 Medals: Buffer, 
 Avatar: Buffer, 
 Streak: String,
 Level: [{type: mongoose.SchemaTypes.ObjectId, ref: "Level"}],
 Sublevel: [{type: mongoose.SchemaTypes.ObjectId, ref: "Sublevel"}], 
 Lives: Number, 

})

export interface IGamification extends mongoose.Document{
 Points: []; 
 Medals: Buffer; 
 Avatar: Buffer; 
 Streak: string; 
 Level: []; 
 Sublevel: []; 
 Lives: Number; 

}
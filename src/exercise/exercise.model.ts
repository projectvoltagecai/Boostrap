import mongoose from "mongoose";
import { ExerciseType } from "./exercise.DTO";

export const ExerciseSchema = new mongoose.Schema({
 
 ExerciseType: {type: String, enum: Object.values(ExerciseType) }, 
 Skills: [{type: mongoose.SchemaTypes.ObjectId, ref: "Skill"}], 
 Points: Number, 
 Level: [{type: mongoose.SchemaTypes.ObjectId, ref: "Level"}],
 Sublevel: [{type: mongoose.SchemaTypes.ObjectId, ref: "Sublevel"}], 
 Instruction: String, 
 RightAnswer: String, 
 Audio: Buffer, 
 Image: Buffer,
 Text: String


})

export interface IExercise extends mongoose.Document {
 
 ExerciseType: ExerciseType; 
 Skill: []; 
 Points: number; 
 Level: []; 
 Sublevel: []; 
 Instruction: string; 
 RightAnswer: string; 
 Audio: Buffer; 
 Image: Buffer; 
 Text: String; 


}
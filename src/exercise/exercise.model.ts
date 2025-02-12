import mongoose from "mongoose";

export const ExerciseSchema = new mongoose.Schema({
 
 ExerciseType: String, 
 Skills: String, 
 Points: Number, 
 Level: String, 
 Sublevel: String, 
 Instruction: String, 
 RightAnswer: String, 
 Audio: Buffer, 
 Image: Buffer,
 Text: String


})

export interface IExercise extends mongoose.Document {
 
 ExerciseType: string; 
 Skill: string; 
 Points: number; 
 Level: string; 
 Sublevel: string; 
 Instruction: string; 
 RightAnswer: string; 
 Audio: Buffer; 
 Image: Buffer; 
 Text: String; 


}
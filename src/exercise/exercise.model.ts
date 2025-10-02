import mongoose from "mongoose";
import { ExerciseType, Skill } from "./exercise.DTO";
import { ILevel } from "src/level/Level.model";
import { ISublevel } from "src/sublevel/Sublevel.model";

export const ExerciseSchema = new mongoose.Schema({
 
 ExerciseType: {type: String, enum: Object.values(ExerciseType) }, 
 Skill: {type: String, enum: Object.values(Skill)},
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
 Skill: Skill; 
 Points: number; 
 Level: ILevel; 
 Sublevel: ISublevel; 
 Instruction: string; 
 RightAnswer: string; 
 Audio: Buffer; 
 Image: Buffer; 
 Text: String; 


}
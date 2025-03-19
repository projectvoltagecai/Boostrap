import mongoose, { Date } from "mongoose"; 
import { IExercise } from "src/exercise/exercise.model";
import { ISkill } from "src/skill/Skill.model";
import { ISublevel } from "src/sublevel/Sublevel.model";
import { IUser } from "src/user/user.model";

export const ProgressSchema = new mongoose.Schema({

    
    userId: {type: mongoose.SchemaTypes.ObjectId, ref: "User"},
    sublevelId: [{type: mongoose.SchemaTypes.ObjectId, ref: "Sublevel"}], 
    exerciseId: [{type: mongoose.SchemaTypes.ObjectId, ref: "Exercise"}], 
    datetime: Date,
    points: Number,
    skillId: [{type: mongoose.SchemaTypes.ObjectId, ref: "Skill"}], 

})

export interface IProgress extends mongoose.Document {

   
    userId: IUser; 
    sublevel: ISublevel[]; 
    exercise: IExercise[]; 
    datetime: Date; 
    points: number; 
    skillId: ISkill[]; 

}
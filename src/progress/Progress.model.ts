import mongoose, { Date } from "mongoose"; 

export const ProgressSchema = new mongoose.Schema({

    
    userId: Number,
    sublevelId: String, 
    exerciseId: String, 
    datetime: Date,
    points: Number,
    skillId: Number, 

})

export interface IProgress extends mongoose.Document {

   
    userId: Number; 
    sublevel: string; 
    exercise: string; 
    datetime: Date; 
    points: number; 
    skillId: Number; 

}
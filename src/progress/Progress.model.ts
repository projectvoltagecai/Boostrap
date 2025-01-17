import mongoose from "mongoose"; 

export const ProgressSchema = new mongoose.Schema({

    progressId: Number, 
    userId: Number,
    sublevelId: String, 
    exerciseId: String, 
    date: Date,
    time: String, 
    points: Number,
    skillId: Number, 

})

export interface IProgress extends mongoose.Document {

    progressId: Number; 
    userId: Number; 
    sublevel: string; 
    exercise: string; 
    date: Date; 
    time: string; 
    points: number; 
    skillId: Number; 

}
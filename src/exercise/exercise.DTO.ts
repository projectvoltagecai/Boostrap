import { ILevel } from "src/level/Level.model";
import { ISublevel } from "src/sublevel/Sublevel.model";

export class ExerciseDto{
    
  
 ExerciseType: ExerciseType; 
 Skill: Skill; 
 Level: ILevel[]; 
 Sublevel: ISublevel[]; 
 Points: number; 
 Instruction: string; 
 Audio: Buffer; 
 Image: Buffer; 
 Text: String; 
}


export enum ExerciseType{
    TAG="tag", MATCH="match", CLASSIFY="classify", GAP="gap", TYPING="typing", MULTIPLECHOICE="multiplechoice"
}
export enum Skill{
    VOCABULARY="vocabulary", LISTENING="listening", READING="reading", WRITING="writing"}
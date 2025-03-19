export class ExerciseDto{
    
  
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

export enum ExerciseType{
    TAG="tag", MATCH="match", CLASSIFY="classify", GAP="gap", MULTIPLECHOICE="multiplechoice"
}
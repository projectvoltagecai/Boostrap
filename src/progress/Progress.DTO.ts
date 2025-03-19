import { ISkill } from "src/skill/Skill.model";

export class ProgressDto{

    
    userId: String; 
    sublevelId: []; 
    exerciseId: []; 
    datetime: Date; 
    points: number; 
    skillId: ISkill[]; 

}
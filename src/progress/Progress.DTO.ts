import { ISkill } from "src/skill/Skill.model";
import { IUser } from "src/user/user.model";

export class ProgressDto{

    
    userId: IUser; 
    sublevelId: []; 
    exerciseId: []; 
    datetime: Date; 
    points: number; 
    skillId: ISkill[]; 
    Medals: Buffer; 
    Streak: string; 
    Lives: Number; 
    

}
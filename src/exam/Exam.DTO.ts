import { ILevel } from "src/level/Level.model";
import { ISublevel } from "src/sublevel/Sublevel.model";

export class ExamDto {
 Question: string; 
 Answer: string;
 Points: Number;
 Level: ILevel[];
 Sublevel: ISublevel[]; 
 Audio: Buffer; 
 Image: Buffer; 
 Text: string
}
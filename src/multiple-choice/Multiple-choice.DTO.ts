import { IItems } from "src/items/items.model";

export class MultipleChoiceDto{
    Instruction: string; 
    Text: string; 
    Items: [IItems]; 
    Level: []; 
    Skill: [];
    Audio: Buffer;  
    
    
    }
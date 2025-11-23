import { IItems } from "src/items/items.model";

export class MultipleChoiceDto{
    
    Text: string; 
    Items: [IItems]; 
    Audio: Buffer;  
    
    
    }
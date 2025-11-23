import { ILevel } from "src/level/Level.model";
import { ISublevel } from "src/sublevel/Sublevel.model";

export class VocabularyDto {
    
   
    ObjectName: string; 
    Audio: Buffer; 
    IPA: string; 
    Image: Buffer; 
    Description: String; 
    Level: ILevel; 
    Sublevel: ISublevel; 

}
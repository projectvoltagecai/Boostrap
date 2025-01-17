import { Module } from '@nestjs/common';
import { SkillSchema } from './Skill.model';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';

@Module({

   imports:[

       MongooseModule.forFeature([{name: 'Skill', schema: SkillSchema}])
        ],
        
        controllers: [SkillController],
        providers: [SkillService]

})
export class SkillModule {

    
}

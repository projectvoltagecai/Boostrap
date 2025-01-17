import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { LevelSchema } from './Level.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

    imports: [

        MongooseModule.forFeature([{name: 'Level', schema: LevelSchema}])
    ],

    providers: [LevelService], 
    controllers: [LevelController]
})
export class LevelModule {}

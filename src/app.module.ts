import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { GamificationModule } from './gamification/gamification.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { ExerciseModule } from './exercise/exercise.module';
import { SkillModule } from './skill/skill.module';
import { ExamModule } from './exam/exam.module';
import { LevelModule } from './level/level.module';
import { SublevelModule } from './sublevel/sublevel.module';
import { ProgressModule } from './progress/progress.module';
import { MatchModule } from './match/match.module';
import { MultipleChoiceModule } from './multiple-choice/multiple-choice.module';
import { GapModule } from './gap/gap.module';
import { TagModule } from './tag/tag.module';
import { ClassifyModule } from './classify/classify.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://Admin:semillero2024*@cluster0.vhq3q.mongodb.net/Luzcarolina'),  
    UserModule, GamificationModule, VocabularyModule, ExerciseModule, SkillModule, ExamModule, LevelModule, SublevelModule, ProgressModule, MatchModule, MultipleChoiceModule, GapModule, TagModule, ClassifyModule, ItemsModule],   
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

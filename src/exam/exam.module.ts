import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { ExamSchema } from './exam.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports : [

    MongooseModule.forFeature([{name: 'Exam', schema: ExamSchema}])
    ],
  providers: [ExamService], 
  controllers: [ExamController]
})
export class ExamModule {}

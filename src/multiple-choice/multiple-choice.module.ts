import { Module } from '@nestjs/common';
import { MultipleChoiceController } from './multiple-choice.controller';
import { MultipleChoiceService } from './multiple-choice.service';
import { MultipleChoiceSchema } from './Multiple-choice.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports:[
  
    MongooseModule.forFeature([{name: 'MultipleChoice', schema: MultipleChoiceSchema}])
    ],
  controllers: [MultipleChoiceController],
  providers: [MultipleChoiceService]
})
export class MultipleChoiceModule {}

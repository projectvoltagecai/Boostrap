import { Module } from '@nestjs/common';
import { ClassifyController } from './classify.controller';
import { classifySchema } from './classify.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassifyService } from './classify.service';

@Module({

   imports:[
  
    MongooseModule.forFeature([{name: 'Classify', schema: classifySchema}])
    ], 
  controllers: [ClassifyController], 
  providers: [ClassifyService]
  
})
export class ClassifyModule {}

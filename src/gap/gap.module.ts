import { Module } from '@nestjs/common';
import { GapController } from './gap.controller';
import { gapSchema } from './gap.model';
import { MongooseModule } from '@nestjs/mongoose';
import { GapService } from './gap.service';

@Module({

  imports:[
    
      MongooseModule.forFeature([{name: 'Gap', schema: gapSchema}])
      ], 
  controllers: [GapController],
  providers: [GapService]
})
export class GapModule {}

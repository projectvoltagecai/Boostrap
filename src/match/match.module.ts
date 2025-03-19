import { Module } from '@nestjs/common';
import { MatchSchema } from './Match.model';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

     imports:[
    
      MongooseModule.forFeature([{name: 'Match', schema: MatchSchema}])
      ], 
      controllers: [MatchController],
      providers: [MatchService]
    })

export class MatchModule {}

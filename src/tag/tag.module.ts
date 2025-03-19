import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { tagSchema } from './tag.model';
import { MongooseModule } from '@nestjs/mongoose';
import { TagService } from './tag.service';

@Module({

  imports:[
  
    MongooseModule.forFeature([{name: 'Tag', schema: tagSchema}])
    ], 
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule {}

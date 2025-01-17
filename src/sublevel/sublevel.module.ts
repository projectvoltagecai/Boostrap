import { Module } from '@nestjs/common';
import { SublevelService } from './sublevel.service';
import { SublevelController } from './sublevel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SublevelSchema } from './Sublevel.model';

@Module({

     imports:[

     MongooseModule.forFeature([{name: 'Sublevel', schema: SublevelSchema}])
     ],

     providers: [SublevelService], 
     controllers: [SublevelController]

})
export class SublevelModule {}

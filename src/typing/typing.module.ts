import { Module } from '@nestjs/common';
import { typingService } from './typing.service';
import { typingController } from './typing.controller';
import { typingSchema } from './typing.model';
import { MongooseModule } from '@nestjs/mongoose';


@Module({

   imports : [ MongooseModule.forFeature([{name: 'typing', schema: typingSchema}])
     ],
    controllers: [typingController],
    providers: [typingService]
})
export class typingModule {}

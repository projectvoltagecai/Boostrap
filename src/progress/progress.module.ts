import { Module } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressController } from './progress.controller';
import { ProgressSchema } from './Progress.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

    imports: [

    MongooseModule.forFeature([{name: 'Progress', schema: ProgressSchema}])
], 
    providers: [ProgressService], 
    controllers: [ProgressController]
})
export class ProgressModule {}

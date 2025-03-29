import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsSchema } from './items.model';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports:[
      
  MongooseModule.forFeature([{name: 'Items', schema: ItemsSchema}])
    ], 
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {



}

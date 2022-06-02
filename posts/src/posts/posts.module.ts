import { Module ,HttpModule} from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Post} from './posts.entity';

@Module( {
  imports:[
    TypeOrmModule.forFeature([Post]),
    HttpModule,
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}

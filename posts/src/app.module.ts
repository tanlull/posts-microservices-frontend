import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 13306,
      username: 'root',
      password: 'toor',
      database: 'posts_ms',
      autoLoadEntities:true,
      synchronize: true,
    }),
    PostsModule,
  ],
})
export class AppModule {}

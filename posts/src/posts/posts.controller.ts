import { PostsService } from './posts.service';

import { Body, Controller, Get, Post,HttpService } from '@nestjs/common';


@Controller('posts')
export class PostsController {

    constructor(
        private postService:PostsService,
        private httpService: HttpService
        ){

    }

    @Get()
    async all(){
        let posts = await  this.postService.find();
        //console.log(posts);
        for (let i=0;i<posts.length;i++){
            let post = posts[i];
            //console.log(post.id);
            let request = await this.httpService.get(`http://localhost:8001/api/comments/posts/${post.id}/comments`).toPromise();
            //console.log(`http://localhost:8001/api/comments/posts/${post.id}/comments`);
            //console.log(request.data);
            posts[i] = {
                ...post,
                comments:request.data
            }
        }
        return posts;
    }


    @Post()
    async create(
        @Body('title') title:string,
        @Body('description') description:string,
    ){
        return this.postService.create({
            title,
            description
        })

    }
}

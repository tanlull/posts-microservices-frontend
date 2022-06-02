import { PostsService } from './posts.service';

import { Body, Controller, Get, Post } from '@nestjs/common';


@Controller('posts')
export class PostsController {

    constructor(private PostService:PostsService){

    }

    @Get()
    async all(){
        return this.PostService.find();
    }

    @Post()
    async create(
        @Body('title') title:string,
        @Body('description') description:string,
    ){
        return this.PostService.create({
            title,
            description
        })

    }
}

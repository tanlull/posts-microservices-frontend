
import { CommentsService } from './comments.service';
import { Body, Controller, Get, Post ,Param} from '@nestjs/common';

@Controller('comments')
export class CommentsController {
    constructor(private commentService:CommentsService){

    }

    @Get('/posts/:id/comments')
    async postComments(
        @Param('id')    id:number
    ){
        return this.commentService.find({
                where:{
                    post_id:id
            }
        }
        );
    }

    @Post()
    async create(
        @Body('post_id') post_id:number,
        @Body('text') text:string,
    )
    {
        this.commentService.create({
            post_id,
            text
        })
    }
}

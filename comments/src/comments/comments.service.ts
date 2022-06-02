import { Injectable } from '@nestjs/common';
import { Comment } from './comments.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository,FindManyOptions} from 'typeorm';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment) private readonly postRepository: Repository<Comment>
    ){

    }

    async find(options:FindManyOptions):Promise<Comment[]>{
        return this.postRepository.find(options);
    }

    async create(data):Promise<Comment>{
        return this.postRepository.save(data);
    }
}

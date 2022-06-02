import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private readonly postRepository: Repository<Post>
    ){

    }

    async find():Promise<Post[]>{
        return this.postRepository.find();
    }

    async create(data):Promise<Post>{
        return this.postRepository.save(data);
    }
}
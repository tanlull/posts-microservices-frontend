import { Post } from './posts.entity';
import { Repository } from 'typeorm';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: Repository<Post>);
    find(): Promise<Post[]>;
    create(data: any): Promise<Post>;
}

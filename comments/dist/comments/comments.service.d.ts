import { Comment } from './comments.entity';
import { Repository, FindManyOptions } from 'typeorm';
export declare class CommentsService {
    private readonly postRepository;
    constructor(postRepository: Repository<Comment>);
    find(options: FindManyOptions): Promise<Comment[]>;
    create(data: any): Promise<Comment>;
}

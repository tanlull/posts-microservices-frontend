import { PostsService } from './posts.service';
export declare class PostsController {
    private PostService;
    constructor(PostService: PostsService);
    all(): Promise<import("./posts.entity").Post[]>;
    create(title: string, description: string): Promise<import("./posts.entity").Post>;
}

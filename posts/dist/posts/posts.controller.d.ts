import { PostsService } from './posts.service';
import { HttpService } from '@nestjs/common';
export declare class PostsController {
    private postService;
    private httpService;
    constructor(postService: PostsService, httpService: HttpService);
    all(): Promise<import("./posts.entity").Post[]>;
    create(title: string, description: string): Promise<import("./posts.entity").Post>;
}

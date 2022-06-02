import { CommentsService } from './comments.service';
export declare class CommentsController {
    private commentService;
    constructor(commentService: CommentsService);
    postComments(id: number): Promise<import("./comments.entity").Comment[]>;
    create(post_id: number, text: string): Promise<void>;
}

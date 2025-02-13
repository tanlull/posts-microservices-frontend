"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const posts_service_1 = require("./posts.service");
const common_1 = require("@nestjs/common");
let PostsController = class PostsController {
    constructor(postService, httpService) {
        this.postService = postService;
        this.httpService = httpService;
    }
    async all() {
        let posts = await this.postService.find();
        for (let i = 0; i < posts.length; i++) {
            let post = posts[i];
            let request = await this.httpService.get(`http://localhost:8001/api/comments/posts/${post.id}/comments`).toPromise();
            posts[i] = Object.assign(Object.assign({}, post), { comments: request.data });
        }
        return posts;
    }
    async create(title, description) {
        return this.postService.create({
            title,
            description
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "all", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "create", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        common_1.HttpService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map
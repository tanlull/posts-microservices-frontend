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
exports.CommentsController = void 0;
const comments_service_1 = require("./comments.service");
const common_1 = require("@nestjs/common");
let CommentsController = class CommentsController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async postComments(id) {
        return this.commentService.find({
            where: {
                post_id: id
            }
        });
    }
    async create(post_id, text) {
        this.commentService.create({
            post_id,
            text
        });
    }
};
__decorate([
    (0, common_1.Get)('/posts/:id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "postComments", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('post_id')),
    __param(1, (0, common_1.Body)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map
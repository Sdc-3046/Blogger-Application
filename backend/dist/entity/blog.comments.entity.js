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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogCommentEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const blog_entity_1 = require("./blog.entity");
let BlogCommentEntity = class BlogCommentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlogCommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogCommentEntity.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogCommentEntity.prototype, "userComment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BlogCommentEntity.prototype, "blogId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => blog_entity_1.BlogEntity, blog => blog.comments, { eager: true }),
    __metadata("design:type", blog_entity_1.BlogEntity)
], BlogCommentEntity.prototype, "blog", void 0);
BlogCommentEntity = __decorate([
    (0, typeorm_1.Entity)('comment')
], BlogCommentEntity);
exports.BlogCommentEntity = BlogCommentEntity;
//# sourceMappingURL=blog.comments.entity.js.map
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entity/user.entity";
import { BlogCommentRepository } from "./blog.comments.repository";
import { BlogTag } from "./blog.tag.enum";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BlogRepository } from "./blogs.repository"
import { BlogTemplateDto } from "./dto/blog.template.dto";

@Injectable()
export class BlogServices {

    constructor(@InjectRepository(BlogRepository) private blogRepository: BlogRepository, @InjectRepository(BlogCommentRepository) private blogCommentRepository: BlogCommentRepository) {

    }
    createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity) {
        return this.blogRepository.createBlog(blogTitle, blogContent, blogTags, blogDate, user);
    }

    getBlogsByTags(blogTags: BlogTag, blogTitle: string, user: UserEntity) {
        return this.blogRepository.getBlogsByTags(blogTags, blogTitle, user);
    }

    deleteBlog(blogTitle: string, user: UserEntity,) {
        return this.blogRepository.deleteBlog(blogTitle, user);
    }

    getBlogById(id: number, user: UserEntity,) {
        const blog = this.blogRepository.getBlogById(id, user);
        const comments = this.blogCommentRepository.getComments(id);
        return { blog, comments };
    }

    addComment(id: number, userComment: string, user: UserEntity) {
        return this.blogCommentRepository.addComment(id, userComment, user);
    }

    getComments(id: number) {
        return this.blogCommentRepository.getComments(id);
    }

}
import { UserEntity } from "src/entity/user.entity";
import { BlogCommentRepository } from "./blog.comments.repository";
import { BlogTag } from "./blog.tag.enum";
import { BlogRepository } from "./blogs.repository";
export declare class BlogServices {
    private blogRepository;
    private blogCommentRepository;
    constructor(blogRepository: BlogRepository, blogCommentRepository: BlogCommentRepository);
    createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity): Promise<import("../entity/blog.entity").BlogEntity | "Blog title and Blog content cannot be empty">;
    getBlogsByTags(blogTags: BlogTag, blogTitle: string, user: UserEntity): Promise<import("../entity/blog.entity").BlogEntity[]>;
    deleteBlog(blogTitle: string, user: UserEntity): Promise<void>;
    getBlogById(id: number, user: UserEntity): {
        blog: Promise<import("../entity/blog.entity").BlogEntity>;
        comments: Promise<BlogCommentRepository[]>;
    };
    addComment(id: number, userComment: string, user: UserEntity): Promise<import("../entity/blog.comments.entity").BlogCommentEntity>;
    getComments(id: number): Promise<BlogCommentRepository[]>;
}

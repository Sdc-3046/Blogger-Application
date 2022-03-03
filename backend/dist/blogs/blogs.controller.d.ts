import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";
import { BlogTag } from "./blog.tag.enum";
import { BlogServices } from "./blogs.service";
export declare class BlogsController {
    private readonly blogservice;
    constructor(blogservice: BlogServices);
    createBlog(user: UserEntity, blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date): Promise<BlogEntity | "Blog title and Blog content cannot be empty">;
    getBlogsByTags(blogTags: BlogTag, blogTitle: string): Promise<BlogEntity[]>;
    deleteComments(id: number): Promise<void>;
    deleteBlog(id: number): Promise<import("typeorm").DeleteResult>;
    getBlogById(id: number): Promise<BlogEntity>;
    addComment(id: number, userComment: string, user: UserEntity): Promise<import("../entity/blog.comments.entity").BlogCommentEntity>;
    getBlogList(): Promise<BlogEntity[] | "No blogs yet.">;
    getComments(id: number): Promise<import("./blog.comments.repository").BlogCommentRepository[]>;
    updateBlogbyId(id: number, blogTitle: string, blogContent: string, blogTags: BlogTag): Promise<BlogEntity>;
    getBlog(user: UserEntity): Promise<BlogEntity[]>;
}

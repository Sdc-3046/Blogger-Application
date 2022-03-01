import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { BlogTag } from "./blog.tag.enum";
export declare class BlogRepository extends Repository<BlogEntity> {
    createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity): Promise<BlogEntity | "Blog title and Blog content cannot be empty">;
    getBlogsByTags(blogTags: BlogTag, blogTitle: string): Promise<BlogEntity[]>;
    deleteBlog(id: number): Promise<import("typeorm").DeleteResult>;
    getBlogById(id: number): Promise<BlogEntity>;
    getBlogList(): Promise<BlogEntity[] | "No blogs yet.">;
    getComments(blog: BlogEntity, user: UserEntity): Promise<BlogEntity[] | "No Comments yet">;
    updateBlogbyId(id: number, blogTitle: string, blogContent: string, blogTags: BlogTag): Promise<BlogEntity>;
    getMyblogs(user: UserEntity): Promise<BlogEntity[]>;
}

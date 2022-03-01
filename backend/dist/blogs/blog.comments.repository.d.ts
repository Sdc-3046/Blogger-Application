import { BlogCommentEntity } from "src/entity/blog.comments.entity";
import { UserEntity } from "src/entity/user.entity";
import { Repository } from "typeorm";
export declare class BlogCommentRepository extends Repository<BlogCommentRepository> {
    addComment(id: number, userComment: string, user: UserEntity): Promise<BlogCommentEntity>;
    getComments(id: number): Promise<BlogCommentRepository[]>;
    deleteComment(id: number): Promise<void>;
}

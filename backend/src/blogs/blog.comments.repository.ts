/* eslint-disable prettier/prettier */
import { BlogCommentEntity } from "src/entity/blog.comments.entity";
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";



@EntityRepository(BlogCommentEntity)
export class BlogCommentRepository extends Repository<BlogCommentRepository>{


    async addComment(id: number, userComment: string, user: UserEntity) {
        const comment = new BlogCommentEntity();
        comment.userComment = userComment;
        comment.blogId = id;
        if (user) {
            comment.userName = (user.firstName + " " + user.lastName)
        }
        await comment.save();
        return comment;
    }

    async getComments(id: number) {
        const query = this.createQueryBuilder('comments');
        query.andWhere('comments.blogId=:id', { id: id });

        const comments = query.getMany()

        if (await comments) {
            return await comments;
        }
    }

    async deleteComment(id: number) {
        const query = this.createQueryBuilder("comments")

        query.andWhere('comments.blogId=:id', { id: id })

        const comments = await query.getMany()
        if (comments) {
            await this.remove(comments)
        }

    }

}
/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { BlogTag } from "./blog.tag.enum";


@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity>{

    async createBlog(blogTitle: string, blogContent: string, blogTags: BlogTag, blogDate: Date, user: UserEntity,) {

        //const { blogTitle, blogContent, blogTags, blogDate } = blogTemplateDto;

        if (blogTitle.length === 0 && blogContent.length === 0) {
            return 'Blog title and Blog content cannot be empty';
        }

        const blog = new BlogEntity();
        blog.blogTitle = blogTitle;
        blog.blogContent = blogContent;
        blog.blogTags = blogTags;
        blog.blogDate = blogDate;
        blog.userId = user.id;
        await blog.save();
        return blog;
    }

    async getBlogsByTags(blogTags: BlogTag, blogTitle: string) {
        const query = this.createQueryBuilder('blogs')
        query.andWhere('blogTags = :blogTags OR blogTitle = :blogTitle', { blogTags: blogTags, blogTitle: blogTitle })
        return query.getMany();
    }

    async deleteBlog(blogTitle: string, user: UserEntity,) {

        const query = this.createQueryBuilder('blogs')

        query.andWhere('blogTitle=:blogTitle', { blogTitle: blogTitle });
        query.andWhere('blogs.userId=:userId', { userId: user.id })

        const blog = query.getOne()

        //console.log(await blog)

        if (await blog) {
            this.delete(await blog);
        }
        else {
            throw new NotFoundException('Blog not found');
        }
    }

    async getBlogById(id: number, user: UserEntity,) {
        const query = this.createQueryBuilder('blogs');

        query.andWhere('blogs.userId=:userId AND id=:id', { userId: user.id, id: id });

        const blog = query.getOne();
        //console.log('outside blog')
        if (await blog) {
            //console.log('inside blog' + await blog)
            return await blog;
        }
        throw new NotFoundException('Blog not found')
    }

    async getBlogList() {
        const bloglist = this.find()
        console.log(bloglist)
        if (await bloglist) {
            return bloglist;
        }
        else {
            return 'No blogs yet.'
        }
    }

    async getComments(blog: BlogEntity, user: UserEntity,) {

        const query = this.createQueryBuilder('comments')
        query.andWhere('comments.blogId=:blogId', { blogId: blog.id })

        const comments = query.getMany();

        if (await comments) {
            return await comments;
        }
        else {
            return 'No Comments yet';
        }
    }

}

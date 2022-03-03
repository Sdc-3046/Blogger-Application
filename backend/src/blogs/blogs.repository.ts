/* eslint-disable prettier/prettier */
import { NotFoundException, UnauthorizedException } from "@nestjs/common";
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
        blog.userId = user.id;
        await blog.save();
        return blog;
    }

    async getBlogsByTags(blogTags: BlogTag, blogTitle: string) {
        const query = this.createQueryBuilder('blogs')
        query.andWhere('blogTags = :blogTags OR blogTitle = :blogTitle', { blogTags: blogTags, blogTitle: blogTitle })
        return query.getMany();
    }

    async deleteBlog(id: number) {

        const query = this.createQueryBuilder('blogs')

        query.andWhere('blogs.id=:id', { id: id });


        const blog = query.getOne()

        //console.log(await blog)

        if (await blog) {
            return this.delete(await blog);
        }
        else {
            throw new NotFoundException('Blog not found');
        }
    }

    async getBlogById(id: number) {
        const query = this.createQueryBuilder('blogs');

        query.andWhere('id=:id', { id: id });

        const blog = query.getOne();
        //console.log('outside blog')
        if (await blog) {
            //console.log('inside blog' + await blog)
            console.log(blog)
            return await blog;
        }
        throw new NotFoundException('Blog not found')
    }

    async getBlogList() {
        const bloglist = await this.find()
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

    async updateBlogbyId(id: number, blogTitle: string, blogContent: string, blogTags: BlogTag) {

        const query = this.createQueryBuilder('blogs');
        query.andWhere('blogs.id=:id', { id: id })

        const blog = await query.getOne();

        if (blog) {
            blog.blogTitle = blogTitle;
            blog.blogContent = blogContent;
            blog.blogTags = blogTags
            blog.save();
            return blog;

        }
        else {
            throw new NotFoundException('Blog not found')
        }
    }

    async getMyblogs(user: UserEntity) {

        const query = this.createQueryBuilder('blogs')
        query.andWhere('blogs.userId=:userId', { userId: user.id });

        const blogs = await query.getMany();

        if (blogs) {
            return blogs;
        }
        else {
            throw new NotFoundException('No blogs yet write new blogs to view')
        }


    }

}

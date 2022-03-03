/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";
import { GetUser } from "src/users/get.user.decorator";
import { BlogTag } from "./blog.tag.enum";
import { BlogServices } from "./blogs.service"


@Controller('bloggers')
@UseGuards(AuthGuard())
export class BlogsController {

    constructor(private readonly blogservice: BlogServices) {

    }

    @Post('createblog')
    createBlog(@GetUser() user: UserEntity, @Body('blogTitle') blogTitle: string, @Body('blogContent') blogContent: string, @Body('blogTags') blogTags: BlogTag, @Body('blogDate') blogDate: Date) {
        console.log(blogTitle)
        return this.blogservice.createBlog(blogTitle, blogContent, blogTags, blogDate, user);
    }

    @Get('getblogs')
    getBlogsByTags(@Body('blogTags') blogTags: BlogTag, @Body('blogTitle') blogTitle: string) {
        return this.blogservice.getBlogsByTags(blogTags, blogTitle);
    }

    @Post('deletecomments')
    deleteComments(@Body('id') id: number) {
        return this.blogservice.deleteComments(id);
    }

    @Post('deleteblog')
    deleteBlog(@Body('id') id: number) {
        //console.log('delete requested for id = ' + id)
        return this.blogservice.deleteBlog(id);
    }

    @Post('getblogbyid')
    getBlogById(@Body('id') id: number) {
        return this.blogservice.getBlogById(id);
    }

    @Post('addComment')
    addComment(@Body('id') id: number, @Body('userComment') userComment: string, @GetUser() user: UserEntity) {
        return this.blogservice.addComment(id, userComment, user);
    }

    @Get('bloglist')
    getBlogList() {
        return this.blogservice.getBlogList();
    }

    @Get('getcomments/:id')
    getComments(@Param('id') id: number) {
        return this.blogservice.getComments(id);
    }

    @Patch('updateBlog')
    updateBlogbyId(@Body('id') id: number, @Body('blogTitle') blogTitle: string, @Body('blogContent') blogContent: string, @Body('blogTags') blogTags: BlogTag,) {
        console.log('update requested for id = ' + id)
        return this.blogservice.updateBlogbyId(id, blogTitle, blogContent, blogTags);
    }

    @Get('getmyblogs')
    getBlog(@GetUser() user: UserEntity) {
        console.log(user)
        return this.blogservice.getMyblogs(user)
    }

}
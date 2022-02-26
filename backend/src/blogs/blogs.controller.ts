/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
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
    @UsePipes(ValidationPipe)
    createBlog(@GetUser() user: UserEntity, @Body('blogTitle') blogTitle: string, @Body('blogContent') blogContent: string, @Body('blogTags') blogTags: BlogTag, @Body('blogDate') blogDate: Date) {
        console.log(blogTitle)
        return this.blogservice.createBlog(blogTitle, blogContent, blogTags, blogDate, user);
    }

    @Get('getblogs')
    getBlogsByTags(@Body('blogTags') blogTags: BlogTag, @Body('blogTitle') blogTitle: string) {
        return this.blogservice.getBlogsByTags(blogTags, blogTitle);
    }

    @Delete('deleteblog')
    deleteBlog(@GetUser() user: UserEntity, @Body('blogTitle') blogTitle: string) {
        return this.blogservice.deleteBlog(blogTitle, user);
    }

    @Get('getblogbyid')
    getBlogById(@GetUser() user: UserEntity, @Body('id') id: number) {
        return this.blogservice.getBlogById(id, user);
    }

    @Post('addComment')
    addComment(@Body('id') id: number, @Body('userComment') userComment: string, @GetUser() user: UserEntity) {
        return this.blogservice.addComment(id, userComment, user);
    }

    @Get('bloglist')
    getBlogList() {
        return this.blogservice.getBlogList();
    }

    @Get('getcomments')
    getComments(@Body('id') id: number) {
        return this.blogservice.getComments(id);
    }

}
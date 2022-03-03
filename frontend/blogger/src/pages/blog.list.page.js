import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react';
import { getBloglist } from '../services/blog.service';
import Blog from '../components/blog.compnent';
import Dropdown from 'react-bootstrap/Dropdown'

const BlogListPage = (props) => {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        loadTasks()
    }, [])


    const loadTasks = async () => {
        const result = await getBloglist()
        if (result) {
            setBlogs(result)
        }
    }

    const createBlog = async () => {
        navigate('/createBlog')
    }

    const logout = () => {

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userEmail')
        navigate('/signin')
    }

    const myBlogs = async () => {
        navigate('/mybloglist')
    }

    const myProfile = async () => {
        navigate('/myprofile')
    }

    const getallBlogs = () => {
        navigate('/blog-list')
    }

    return (
        <div>
            <Dropdown className='dropdown' style={{ float: 'right' }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={myProfile}>My Profile</Dropdown.Item>
                    <Dropdown.Item onClick={createBlog}>Write a blog</Dropdown.Item>
                    <Dropdown.Item onClick={myBlogs}>My Blogs</Dropdown.Item>
                    <Dropdown.Item onClick={getallBlogs}>Homepage</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>

            <h1 className="header">Blogger</h1>

            <div className="row">
                {blogs.length > 0 && blogs.map((blog) => {
                    const { id, blogTitle, blogContent, blogDate, blogTags } = blog
                    return (
                        <Blog
                            key={id}
                            id={id}
                            blogTitle={blogTitle}
                            blogContent={blogContent}
                            blogDate={blogDate}
                            blogTags={blogTags}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogListPage

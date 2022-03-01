import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { viewBlog } from '../services/blog.service';
import Dropdown from 'react-bootstrap/Dropdown'
import BlogPage from '../components/blogpage.component';

const BlogViewPage = (props) => {
    const [blog, setBlog] = useState([])
    const navigate = useNavigate()

    const logout = () => {

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userEmail')
        navigate('/signin')
    }

    useEffect(() => {
        loadBlog()
    }, [])

    const createBlog = async () => {
        navigate('/createBlog')
    }

    const loadBlog = async () => {
        const result = await viewBlog(sessionStorage.getItem('id'))
        console.log(sessionStorage.getItem('id'))
        if (result) {
            sessionStorage['blogTitle'] = result.blogTitle;
            sessionStorage['blogContent'] = result.blogContent;
            sessionStorage['blogTags'] = result.blogTags;
            sessionStorage['blogDate'] = result.blogDate;

            setBlog(result)
        }
    }

    const myBlogs = async () => {
        navigate('/mybloglist')
    }

    return (
        <div>
            <Dropdown className='dropdown' style={{ float: 'right' }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Options
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={createBlog}>Create</Dropdown.Item>
                    <Dropdown.Item onClick={myBlogs}>My Blogs</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>

            <h1 className="header">Blogger</h1>

            <div className="row">

                <BlogPage
                    blogTitle={sessionStorage.getItem('blogTitle')}
                    blogContent={sessionStorage.getItem('blogContent')}
                    blogTags={sessionStorage.getItem('blogTags')}
                    blogDate={sessionStorage.getItem('blogDate')}
                />

            </div>
        </div>
    )
}

export default BlogViewPage

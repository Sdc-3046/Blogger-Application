import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { getMyBlogs } from '../services/blog.service';
import Dropdown from 'react-bootstrap/Dropdown'
import MyBlog from '../components/myblog.component';

const MyBlogListPage = (props) => {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        loadTasks()
    }, [])


    const loadTasks = async () => {
        const result = await getMyBlogs()
        if (result) {
            setBlogs(result)
        }
    }

    const createBlog = async () => {
        navigate('/createBlog')
    }

    const myBlogs = async () => {
        navigate('/mybloglist')
    }

    const logout = () => {

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userEmail')
        navigate('/signin')
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

                {blogs.map((blog) => {
                    const { id, blogTitle, blogContent, blogDate, blogTags } = blog
                    return (
                        <MyBlog
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

export default MyBlogListPage

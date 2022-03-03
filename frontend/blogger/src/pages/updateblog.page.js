import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { updateBlog } from '../services/blog.service'
import Dropdown from 'react-bootstrap/Dropdown'
import React, { Component } from 'react';

const UpdateBlogPage = (props) => {
    const [blogTitle, setBlogTitle] = useState('')
    const [blogContent, setBlogContent] = useState('')
    const [blogTags, setBlogTag] = useState('')
    const [blogDate, setBlogDate] = useState('')

    const navigate = useNavigate()

    const onUpdateBlog = async () => {
        if (blogTitle.length === 0) {
            alert('set title')
        } else if (blogContent.length === 0) {
            alert('set description')
        }
        else if (!blogTags) {
            alert('select a tag for a blog')
        }
        else {
            const result = await updateBlog(sessionStorage.getItem('id'), blogTitle, blogContent, blogTags, blogDate)
            if (result) {
                navigate('/blog-list')
            } else {
                navigate('/blog-list')
            }
        }
    }

    const myBlogs = async () => {
        navigate('/mybloglist')
    }

    const myProfile = async () => {
        navigate('/myprofile')
    }

    const createBlog = async () => {
        navigate('/createBlog')
    }

    const logout = () => {

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userEmail')
        navigate('/signin')
    }

    const getallBlogs = () => {
        navigate('/blog-list')
    }

    return (
        <div className='editblog'>
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

            <h1 id='createpageheader' className="header">Update blog...</h1>
            <div className="form">
                <div class="mb-3">
                    <label id='blogtitlecreatepage' class="form-label"><h3>Title</h3></label>
                    <input
                        onChange={(e) => {
                            setBlogTitle(e.target.value)
                        }}
                        type="text"
                        class="form-control"
                    />{' '}
                </div>

                <div class="mb-3">
                    <label class="form-label"><h3>Content</h3></label>
                    <textarea
                        onChange={(e) => {
                            setBlogContent(e.target.value)
                        }}
                        rows={20}
                        type="text"
                        class="form-control"
                    ></textarea>
                </div>

                <div className='tags'>
                    <h4>Tags</h4>
                    <button value={"FOOD"} onClick={(e) => {
                        setBlogTag(e.target.value)
                    }}>FOOD</button>

                    <button value={"ART"} onClick={(e) => {
                        setBlogTag(e.target.value)
                    }}>ART</button>

                    <button value={"SPORTS"} onClick={(e) => {
                        setBlogTag(e.target.value)
                    }}>SPORTS</button>

                    <button value={"LIFESTYLE"} onClick={(e) => {
                        setBlogTag(e.target.value)
                    }}>LIFESTYLE</button>

                    <button value={"NEWS"} onClick={(e) => {
                        setBlogTag(e.target.value)

                    }}>NEWS</button>


                </div>

                <div class="mb-3">
                    <button onClick={onUpdateBlog} className="btn btn-success">
                        Save
                    </button>
                    <Link
                        to="/blog-list"
                        style={{ marginLeft: '10px' }}
                        className="btn btn-danger"
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default UpdateBlogPage

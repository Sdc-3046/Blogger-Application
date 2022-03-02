import SignupPage from './pages/signup.page'
import SigninPage from './pages/signin.page'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import CreateBlogPage from './pages/blog.create.page';
import BlogListPage from './pages/blog.list.page';
import BlogViewPage from './pages/view.blog.page';
import MyBlogListPage from './pages/myblogs.page';
import UpdateBlogPage from './pages/updateblog.page';
import ProfilePage from './pages/profile.page';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        {/* <h1 className="header">Task Manager</h1> */}
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="createBlog" element={<CreateBlogPage />} />
          <Route path="blog-list" element={<BlogListPage />} />
          <Route path="viewblog" element={<BlogViewPage />} />
          <Route path="mybloglist" element={<MyBlogListPage />} />
          <Route path="updateBlog" element={<UpdateBlogPage />} />
          <Route path="myprofile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

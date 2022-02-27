import SignupPage from './pages/signup.page'
import SigninPage from './pages/signin.page'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import CreateBlogPage from './pages/blog.create.page';

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

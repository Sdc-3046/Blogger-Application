import React from 'react';

const BlogPage = (props) => {
    const { id, blogTitle, blogContent, blogDate, blogTags } = props



    return (
        <div>
            <div className='blogtitleView'><h1> {blogTitle} </h1> </div>
            <div className='blogdateview' ><h5>{blogDate}</h5></div>
            <div rows={100} className='blogcontentView'><p>{blogContent}</p></div>
        </div>
    )
}

export default BlogPage

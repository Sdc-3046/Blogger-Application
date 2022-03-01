import axios from 'axios'
import { settings } from '../config'

export const viewBlog = async (id) => {
    const url = settings.server + `/bloggers/getblogbyid`
    const token = sessionStorage['token']
    //console.log(id + " in viewblog")
    let response
    try {
        response = await axios.post(url,
            {
                id,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )


        response = response.data
    } catch (ex) {
        console.log(ex)
    }

    return response
}

export const getBloglist = async () => {

    const url = settings.server + '/bloggers/bloglist'
    const token = sessionStorage['token']
    let response

    try {
        response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        response = response.data
    }
    catch (ex) {
        throw ex;
    }
    return response;
}


export const createBlog = async (blogTitle, blogContent, blogTags, blogDate) => {
    const url = settings.server + '/bloggers/createblog'
    const token = sessionStorage['token']
    let response
    try {
        response = await axios.post(
            url,
            {
                blogTitle,
                blogContent,
                blogTags,
                blogDate
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        response = response.data
    } catch (ex) {
        console.log(ex)
    }

    return response
}

export const updateBlog = async (id, blogTitle, blogContent, blogTags) => {
    const url = settings.server + `/bloggers/updateBlog`
    const token = sessionStorage['token']
    console.log(id)
    let response
    try {
        response = await axios.patch(
            url,
            {
                id,
                blogTitle,
                blogContent,
                blogTags,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        response = response.data
    } catch (ex) {
        console.log(ex)
    }

    return response
}

export const getMyBlogs = async () => {
    const url = settings.server + `/bloggers/getmyblogs`
    const token = sessionStorage['token']
    console.log(token)
    let response
    try {
        response = await axios.get(
            url,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        response = response.data
    } catch (ex) {
        console.log(ex)
    }

    return response
}

export const deleteBlogs = async (id) => {
    const url = settings.server + `/bloggers/deleteblog`
    const token = sessionStorage['token']
    let response
    try {
        response = await axios.post(
            url,
            {
                id
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        response = response.data
    } catch (ex) {
        console.log(ex)
    }

    return response
}


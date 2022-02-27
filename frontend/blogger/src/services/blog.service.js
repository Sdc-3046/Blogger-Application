import axios from 'axios'
import { settings } from '../config'

export const viewBlog = async (taskStatus = '') => {
    const url = settings.server + `/tasks/${taskStatus}`
    const token = sessionStorage['token']
    let response
    try {
        response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        response = response.data
    } catch (ex) {
        console.log(ex)
    }

    return response
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

export const updateBlog = async (id, taskStatus) => {
    const url = settings.server + `/tasks/update`
    const token = sessionStorage['token']
    let response
    try {
        response = await axios.patch(
            url,
            {
                id,
                taskStatus,
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

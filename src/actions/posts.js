import { FETCH_POSTS, NEW_POSTS } from './index'

export const fetchPosts = () => dispatch => {
    fetch(`${process.env.API_POST_ENDPOINT}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
}

export const createPosts = (post) => dispatch => {
    fetch(`${process.env.API_POST_ENDPOINT}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POSTS,
            payload: data
        }))
}
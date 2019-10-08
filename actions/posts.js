import { FETCH_POSTS, NEW_POSTS } from './index'

export const fetchPosts = () => dispatch => {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
}

export const createPosts = (post) => dispatch => {
    fetch(`http://jsonplaceholder.typicode.com/posts`, {
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
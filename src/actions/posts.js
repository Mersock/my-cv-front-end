import fetch from 'isomorphic-unfetch'
import { actionPosts } from './index'

export const fetchPosts = () => dispatch => {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => dispatch({
            type: actionPosts.FETCH_POSTS,
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
            type: actionPosts.NEW_POSTS,
            payload: data
        }))
}
import fetch from 'isomorphic-unfetch'
import { actionPosts } from './index'
import getConfig from 'next/config';


const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();


export const fetchPosts = () => dispatch => {
    const url = serverRuntimeConfig.postUrl || publicRuntimeConfig.postUrl
    fetch(url)
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
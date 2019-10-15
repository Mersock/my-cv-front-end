import React from 'react'
import fetch from 'isomorphic-unfetch'

const Posts = ({ posts }) => {
    const postItem = posts.map(post => (
        <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </li>
    ))

    return (
        <div>
            <ul>
                {postItem}
            </ul>
        </div>
    )
}

Posts.getInitialProps = async ({ store, isServer, pathname, query }) => {
    const res = await fetch(process.env.API_POST_ENDPOINT)
    const data = await res.json()
    return { posts: data }
}

export default Posts

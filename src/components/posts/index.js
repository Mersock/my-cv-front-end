import React, { useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { fetchPosts } from '../../actions/posts'

function Posts() {
    const dispatch = useDispatch()
    const posts = useMappedState(state => state.posts.items)
    const newPost = useMappedState(state => state.posts.item)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if(Object.keys(newPost).length !== 0){
        posts.unshift(newPost)
    }

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

export default Posts

import React, { useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { fetchPosts } from '../../actions/posts'
import Typography from '@material-ui/core/Typography'

function Posts() {
    const dispatch = useDispatch()
    const posts = useMappedState(state => state.posts.items)
    const newPost = useMappedState(state => state.posts.item)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    if (Object.keys(newPost).length !== 0) {
        posts.unshift(newPost)
    }

    const postItem = posts.map(post => (
        <li key={post.id}>
            <Typography variant="subtitle1" noWrap>{post.title}</Typography>
            <Typography noWrap> {post.body} </Typography>
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

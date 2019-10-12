import React from 'react'
import Head from 'next/head'
import PostList from '../components/posts'

function Posts() {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <PostList />
    </div>
  )
}

export default Posts

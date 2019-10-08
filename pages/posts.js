import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import PostList from '../components/posts'

const Posts = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />

    <PostList/>

  </div>
)

export default Posts

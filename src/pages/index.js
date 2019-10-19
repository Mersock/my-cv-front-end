import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layouts'
import PostsList from '../components/posts/lists';
import Profiles from '../components/profiles'
import Categoris from '../components/categories'
import Tags from '../components/tags'

function Index({ posts }) {
  return (
    <Layout>
      <div className="row ">
        <div className="col-md-8">
          <PostsList posts={posts} />
        </div>
        <div className="col-md-4">
          <Profiles />
          <Categoris />
          <Tags />
        </div>
      </div>

    </Layout>
  )
}

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
  const res = await fetch(process.env.API_POST_ENDPOINT)
  const data = await res.json()
  return { posts: data }
}

export default Index

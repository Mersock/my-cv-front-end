import React from 'react'
import { fetchPosts } from '../actions/posts'
import Layout from '../components/layouts'
import PostsList from '../components/posts/lists'
import Profiles from '../components/profiles'
import Categoris from '../components/categories'
import Tags from '../components/tags'

function Index({ posts }) {
  return (
    <Layout>
      <div className="row ">
        <div className="col-md-8">
          {/* <PostsList posts={posts} /> */}
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
  store.dispatch(fetchPosts())
}

export default Index

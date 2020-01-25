import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/post';
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
                    <PostsList posts={posts.data || []} />
                </div>
                <div className="col-md-4">
                    <Profiles />
                    <Categoris />
                    <Tags />
                </div>
            </div>

        </Layout>
    );
};

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
    await store.dispatch(getPosts());
};

export default connect(state => state, { getPosts })(Index);
import axios from 'axios';
import getConfig from 'next/config';
import { actionPosts } from './index'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const getPosts = () => dispatch =>
  axios({
    method: 'GET',
    url: serverRuntimeConfig.postUrl || publicRuntimeConfig.postUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  })
    .then(response => dispatch({ type: actionPosts.FETCH_POSTS, payload: response.data }))
    .catch(err => console.log(err));

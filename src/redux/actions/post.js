import axios from 'axios';
import getConfig from 'next/config';
import { actionPosts } from './index'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const getPosts = (queryString = '') => dispatch =>
  axios({
    method: 'GET',
    url: `${serverRuntimeConfig.postUrl}?${queryString}` || `${publicRuntimeConfig.postUrl}?${queryString}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then(response => dispatch({ type: actionPosts.FETCH_POSTS, payload: response.data }))
    .catch(err => console.log(err));

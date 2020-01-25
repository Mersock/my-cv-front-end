import { actionPosts } from '../actions/index'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionPosts.FETCH_POSTS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducer;

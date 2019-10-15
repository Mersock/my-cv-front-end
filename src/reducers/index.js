import { combineReducers } from 'redux'
import postReducer from '../reducers/posts'

export default combineReducers({
    posts: postReducer
})
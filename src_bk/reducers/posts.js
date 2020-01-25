import { actionPosts } from '../actions/'

const initialState = {
    items: [],
    item: {}
}

export default function (state = {}, action) {
    switch (action.type) {
        case actionPosts.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case actionPosts.NEW_POSTS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}
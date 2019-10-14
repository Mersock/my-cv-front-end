import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { isServer } from './lib/isServer';
import reducers from './reducers/'

export default (initialState = {}) => {
    let middleware = applyMiddleware(thunk);

    if (!isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function") {
        middleware = compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    }

    return createStore(reducers, initialState, middleware);
};
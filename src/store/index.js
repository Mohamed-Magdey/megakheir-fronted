import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";

//                                    debug redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk))
    );
}
import { combineReducers, compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
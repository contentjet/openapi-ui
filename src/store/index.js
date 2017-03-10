import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import openapi from 'reducers/OpenAPIReducer';
import { promiseMiddleware } from 'store/middleware';


// Note we use Immutable.js for our state tree, not plain objects. Redux's
// combineReducers function assumes plain objects which is why we're using
// combineReducers from redux-immutable
const initialState = Immutable.Map();
const appReducer = combineReducers({
  openapi
});

// So we can use redux-devtools-extension in chrome.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(promiseMiddleware, thunk),
  )
);

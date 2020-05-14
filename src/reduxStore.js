import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

//(store) is redux store | (next) moves to the next step in the middleware | (action) is what was dispatched
const functionDispatchMiddleware = store => next => action => {
  if(typeof action !== 'function') return next(action);
  action(store.dispatch);
};

//redux-devtools-extension advanced store setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(functionDispatchMiddleware)
  )
);

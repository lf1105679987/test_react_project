import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import { middleware as reduxPackMiddleware } from 'redux-pack';
import { composeWithDevTools } from 'redux-devtools-extension';

import {createHashHistory} from 'history';
import thunk from 'redux-thunk';

import makeRootReducer from './reducers';
import { initInjectReducer } from './utils/injectReducer';
const history = createHashHistory();

// 中间件集合
const middleware = routerMiddleware(history);
const middlewares = [thunk, middleware, reduxPackMiddleware];
// 开发环境，添加开发中间件
if(process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = createStore(makeRootReducer(), initialState, composeWithDevTools(applyMiddleware(...middlewares)));
  initInjectReducer(store);
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    });
  }
  return {
    history,
    store
  };
}
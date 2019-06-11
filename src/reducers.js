import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const makeRootReducer = (asyncReducers = {}) => {
  return combineReducers({
    router: routerReducer,
    ...asyncReducers
  });
}
export default makeRootReducer;
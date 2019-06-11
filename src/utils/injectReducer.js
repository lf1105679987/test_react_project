import makeRootReducer from './../reducers';

let injectReducer = () => {
  console.warn('must run initInjectReducer(store)');
}

/**
 * initInjectReducer
 * Initialize the reducer injection method,
 * used to cache the store,
 * avoid the storeReducer every time you have to pass the store
 * @param {Object} store redux store
 */
export const initInjectReducer = (store) => {
  store.asyncReducers = store.asyncReducers || {};
  return injectReducer = (key, reducer) => {
    if (store.asyncReducers[key]) {
      return false;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
  }
}

export default (key, reducer) => {
  injectReducer(key, reducer);
};
import { createStore } from 'redux';

import rootReducer from '../reducer/rootReducer';

//import createHistory from 'history/createBrowserHistory';
//import { routerMiddleware } from 'react-router-redux';

// react-router
//export const history = createHistory();
// redux
//const initState = {};

//const middleware = [thunk, routerMiddleware(history)];

const store = createStore(
  rootReducer,
  //initState,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
export default store;

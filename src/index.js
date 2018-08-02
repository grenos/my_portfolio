import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap-grid.css';
import './global_styles.css';
import 'normalize.css';

import store from './redux/store/store';
import AppRouter from './components/router/Router';

// get reactive (live) updates of our state
// store.subscribe(() => {
//   // log the current state
//   console.log(store.getState());
// });

/* give access to all components and their childs to the redux store */
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

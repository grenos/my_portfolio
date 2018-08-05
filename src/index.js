import React from 'react';
import ReactDOM from 'react-dom';

//import registerServiceWorker from './registerServiceWorker';
// import { unregister } from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap-grid.css';
import './global_styles.css';
import 'normalize.css';

import AppRouter from './components/router/Router';

// get reactive (live) updates of our state
// store.subscribe(() => {
//   // log the current state
//   console.log(store.getState());
// });

/* give access to all components and their childs to the redux store */

ReactDOM.render(<AppRouter />, document.getElementById('root'));
//registerServiceWorker();
// unregister();

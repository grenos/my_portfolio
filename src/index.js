import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap-grid.css';
import './global_styles.css';
import 'normalize.css';

import AppRouter from './components/router/Router';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();

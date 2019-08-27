import React from 'react';
import { hydrate, render } from "react-dom";

import 'bootstrap/dist/css/bootstrap-grid.css';
import './global_styles.css';
import 'normalize.css';

import AppRouter from './components/router/Router';


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<AppRouter />, rootElement);
} else {
  render(<AppRouter />, rootElement);
}


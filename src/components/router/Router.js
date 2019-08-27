/* eslint-disable import/first */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';

import Navbar from '../navbar/Navbar';
import App from '../app/App';
import About from '../about/About'
import Contact from '../contact/Contact'
import NotFound from '../notFound/NotFound'


const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);



// <Route component={lazyComponent(NotFound)} /> 
// function lazyComponent(Component) {
//   return props => (
//     <Suspense fallback={<Loader>Loading...</Loader>}>
//       <Component {...props} />
//     </Suspense>
//   );
// }


export default AppRouter;

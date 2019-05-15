/* eslint-disable import/first */
import React, { lazy, Suspense } from 'react';

const About = lazy(() => import('../about/About'));
const Contact = lazy(() => import('../contact/Contact'));
const NotFound = lazy(() => import('../notFound/NotFound'));

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';

//import '../../global_styles.css';

import Navbar from '../navbar/Navbar';
import App from '../app/App';

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={lazyComponent(About)} />
          <Route exact path="/contact" component={lazyComponent(Contact)} />
          <Route component={lazyComponent(NotFound)} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);


function lazyComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}



export default AppRouter;

//
//
//
//

//! version with transition animations
// causes a bug where the sidebar navigation will flash and the links will not work on click
// looking for a solution
// also it doesnt work with hashrouter which required by the github server

// const AppRouter = () => (
//   <BrowserRouter>
//     <div>
//       <Navbar />
//       <Route
//         render={({ location }) => (
//           <TransitionGroup component={null}>
//             <CSSTransition timeout={500} classNames="fade" key={location.key}>
//               <Switch location={location}>
//                 <Route exact path="/" component={App} />
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/contact" component={Contact} />
//                 <Route component={NotFound} />
//               </Switch>
//             </CSSTransition>
//           </TransitionGroup>
//         )}
//       />
//     </div>
//   </BrowserRouter>
// );

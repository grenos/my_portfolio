import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';
//import { TransitionGroup, CSSTransition } from 'react-transition-group';

//import '../../global_styles.css';

import Navbar from '../navbar/Navbar';
import App from '../app/App';
import About from '../about/About';
import Contact from '../contact/Contact';
import NotFound from '../notFound/NotFound';

const AppRouter = () => (
  <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
);

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

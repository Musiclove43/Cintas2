import React from "react";
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams,

} from "react-router-dom";
// import { browserHistory } from 'react-router';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './sign-up';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useState, useEffect, useCallback, updateState} from "react";
// import { useTracking } from './useTracking'
import {createBrowserHistory} from 'history';


import globalHook from 'use-global-hook';
import useGlobal from "./store";

import ProtectedStore from "./protected-store";
import EventBus from "./event-bus";




// import { Router } from 'react-router';

// Create history object.
// import createHistory from 'history/createBrowserHistory';


const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#00152C'
      },
    secondary: {
          main: '#ba0d30'
        },
      // warning: {
      //         main: '#ba0d30'
      //       }
    }
  },
)

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }
//
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )



// onRouteChanged() {
//   console.log("ROUTE CHANGED");
// }

export default function App() {

  const browserHistory = createBrowserHistory();

  browserHistory.listen( location =>  {
   console.log("the new location: ", location);
  });

  /**
   * run this to make system juicy
   */
  function eventSystemMiddleware()
  {
    if(!window._appEvents) {
      window._appEvents = new EventBus();
    }
  }

  /**
   * user auth middleware
   */
  function userAuthMiddleware() {
    // todo: test out localStorage to see if our authentication token exists.
    const user = () => ProtectedStore.get('user');

    if(!user()) {
      console.log('we are not logged in... ish');
      browserHistory.push('/');
    } else {
      console.log('here is the current user: ', user());
    }
  }

  userAuthMiddleware();
  eventSystemMiddleware();

  return (
    <MuiThemeProvider theme={theme}>
    <Router history={  browserHistory }>
    <Switch >
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/about/widget" component={Dashboard}/>
      <Route path="/dashboard/users" component={Dashboard}/>
      <Route path="/about/location" component={Dashboard}/>
      <Route path="/about/configurations" component={Dashboard}/>
      <Route path="/about/swipe" component={Dashboard}/>
      <Route path="/about/truck" component={Dashboard}/>
      <Route path="/topics" component={SignUp}/>
      <Route path="/" component={SignIn}/>
    </Switch>
    </Router>
     </MuiThemeProvider>
  );
}

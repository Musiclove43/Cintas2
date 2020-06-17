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

  // const [globalState, globalActions] = useGlobal();

  // useTracking('UA-USE-YOURS-HERE')

  // const history = createHistory();
  browserHistory.listen( location =>  {
   console.log("router change")
   authenticate()
  });

  function authenticate() {
    // console.log()
//     fetch( "https://rest.garmentvendor.app/auth" , {
//         method: 'post',
//         contentType: 'application/json',
//              headers: {
//           Authorization:
//                  'Bearer' + globalState.token.Token,
// },
//         body: JSON.stringify({
//           "email": globalState.token.UserData.email,
//           "password": 12345678
//
//         })
//       })
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log(result)
//
//           // setToken(result.Token)
//         },
//         (error) => {
//           console.log(error)
//         }
//       )

  }

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

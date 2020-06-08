import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  browserHistory
} from "react-router-dom";
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './sign-up';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



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

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router >
    <Switch>
      <Route path="/about" component={Dashboard}/>
      <Route path="/about/widget" component={Dashboard}/>
      <Route path="/about/users" component={Dashboard}/>
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

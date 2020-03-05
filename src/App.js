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

export default function App() {
  return (
    <Router >
    <Switch>


          <Route path="/about" component={Dashboard}/>
          <Route path="/about/widget" component={Dashboard}/>


          <Route path="/topics" component={SignUp}/>


          <Route path="/" component={SignIn}/>

</Switch>


    </Router>
  );
}

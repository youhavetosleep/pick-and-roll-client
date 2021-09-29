import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Info from "./page/info"
import Navbar from "./component/navbar"
import "./app.css";
import {AuthContextProvider} from "./Context/authContext"
import PrivateRoute from "./component/privateRoute"
import PrivateRoute2 from "./component/privateRoute2"
import LoginForm from './component/login'
import Signup from "./page/signup";
import Users from './page/users';
import PostWrite from './page/postWrite';

function App() {
  return (
    
    <AuthContextProvider>
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Info} />
      {/* <Route exact path="/login" component={LoginForm} /> */}
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/postWrite" component={PostWrite} />
      </Switch>
    </Router>
    </AuthContextProvider>
    
  );
}

export default App;

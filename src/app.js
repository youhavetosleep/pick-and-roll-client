import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./page/info"
import Navbar from "./component/navbarComponent"
import "./app.css";
import {AuthContextProvider} from "./Context/authContext"
import LoginFormComponent from './component/modal/loginFromModal'
import Signup from "./page/signup";
import Users from './page/users';
import PostWrite from './page/postWrite';
import Recipe from "./page/recipe"
import FooterComponent from './component/footerComponent';

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
      <Route exact path="/recipe" component={Recipe} />
      </Switch>
     
    </Router>
    <FooterComponent />
    </AuthContextProvider>
    
  );
}

export default App;

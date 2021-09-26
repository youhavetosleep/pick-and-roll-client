import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./component/home"
import Blog from "./component/blog"
import About from "./component/about"
import Contact from "./component/contact"
import Navbar from "./component/navbar"
import "./app.css";
import {AuthContextProvider} from "./Context/authContext"
import Admin from "./component/admin"
import PrivateRoute from "./component/privateRoute"
import PrivateRoute2 from "./component/privateRoute2"


function App() {
  return (
    
    <AuthContextProvider>
    <Router>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/about">
        <About></About>
      </Route>

      <Route path="/contact">
        <Contact></Contact>
      </Route>

      <Route path="/blog">
        <Blog></Blog>
      </Route>

      <PrivateRoute2 path="/admin" component={Admin}>
      </PrivateRoute2>
      </Switch>
    </Router>
    </AuthContextProvider>
    
  );
}

export default App;

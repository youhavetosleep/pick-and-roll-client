import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home"
import Blog from "./component/Blog"
import About from "./component/About"
import Contact from "./component/Contact"
import Navbar from "./component/Navbar"
import "./App.css";
import {AuthContextProvider} from "./Context/AuthContext"
import Admin from "./component/Admin"
import PrivateRoute from "./component/PrivateRoute"
import PrivateRoute2 from "./component/PrivateRoute2"


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

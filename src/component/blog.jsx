import React from 'react'
import {Link, BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom"
import Recipes from "./recipes"
import Dog from "./dog"
import Cars from "./cars"

const Blog = () => {
    const {path, url}=useRouteMatch()
    console.log(path, url)

    return (
        <div>
            <Router>
            <ul>
                <li><Link to={`${url}/recipes`}>Recipes</Link></li>
                <li><Link to={`${url}/dogs`}>Dogs</Link></li>
                <li><Link to={`${url}/cars`}>Cars</Link></li>
            </ul>

            <Switch>
                <Route exact path={`${path}/recipes`}>
                    <Recipes></Recipes>
                </Route>
                <Route path={`${path}/dogs`}>
                    <Dog />
                </Route>
                <Route path={`${path}/cars`}>
                    <Cars />
                </Route>
            </Switch>
            </Router>
        </div>
    )
}

export default Blog

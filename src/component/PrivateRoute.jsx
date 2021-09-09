import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const {isLoggedIn} = useContext(AuthContext)

    return (
        <Route {...rest} render={(props) =>{
            return isLoggedIn? children: <Redirect to="/" />
        }}>
            
        </Route>
    )
}

export default PrivateRoute

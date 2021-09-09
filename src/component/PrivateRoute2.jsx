import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { AuthContext } from '../Context/AuthContext'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";


const PrivateRoute2 = ({component: Component, ...rest}) => {
const {isLoggedIn}= useContext(AuthContext)

    return (
        <Route {...rest} render={(props)=>{
            return isLoggedIn? <Component {...rest} />: <Redirect to="/" />
        }} />
    )
}

export default PrivateRoute2

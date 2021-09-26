import React, { useContext, useState } from 'react'
import {AuthContext} from "../Context/authContext"
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    return (
        <nav>
            <NavLink className="logo" to="/" >Brand-Logo</NavLink>
            <div className="nav-links"> 
                <NavLink className="link" to="/about">About</NavLink> 
                <NavLink className="link" to="/contact">Contact</NavLink> 
                <NavLink className="link" to="/blog">Blog</NavLink> 
                <NavLink className="link" to="/admin">Admin</NavLink> 
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn? "logout": "login"}</button>
            </div>
        </nav>
    )
}

export default Navbar

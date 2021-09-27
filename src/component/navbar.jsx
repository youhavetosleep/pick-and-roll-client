import React, { useContext, useState } from 'react'
import {AuthContext} from "../Context/authContext"
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    return (
        <nav>
            <NavLink className="logo" to="/" >Pick And Roll</NavLink>
            <div className="nav-links"> 
                <NavLink className="link" to="/Recipe">Recipe</NavLink> 
                <NavLink className="link" to="/Search">search</NavLink> 
                <NavLink className="link" to="/Login">Login</NavLink> 
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn? 
                    "logout"
                    : 
                    "login"
                    }
                    </button>
            </div>
        </nav>
    )
}

export default Navbar

import React, { useContext, useState } from 'react'
import {AuthContext} from "../Context/authContext"
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    return (
        
        <nav>
            {!isLoggedIn ? 
                <div className="beforeLoginView">
                    <NavLink className="logo" to="/" >Pick And Roll</NavLink>

                    <div className="nav-links"> 
                    <button className="testbtn" onClick={()=>setIsLoggedIn(!isLoggedIn)}>test</button>
                    <NavLink className="link" to="/Recipe">레시피</NavLink> 
                    <NavLink className="link" to="/Search">검색</NavLink> 
                    <NavLink className="link" to="/Login">로그인</NavLink> 
                    </div>
                </div>

            :
            <div className="afterLoginView">
                <NavLink className="logo" to="/" >Pick And Roll</NavLink>
                <div className="nav-links"> 
                <button className="testbtn" onClick={()=>setIsLoggedIn(!isLoggedIn)}>test</button>
                <NavLink className="link" to="/Recipe">레시피</NavLink> 
                <NavLink className="link" to="/Search">검색</NavLink> 
                <NavLink className="link" to="/postWrite">새 글 작성</NavLink>
                <NavLink className="link" to="/users">사용자이름</NavLink> 
                <NavLink className="link" to="/Login">로그아웃</NavLink>

                </div>
            </div>
            }

        </nav>
    )
}

export default Navbar



import React, { useContext, useState } from 'react'
import {AuthContext} from "../Context/authContext"
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import LoginForm from './login';
import SearchBox from "./searchBox";



const Navbar = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const [openLogin, setOpenLogin] = useState(false);

    const [showSearchBox, setShowSearchBox] = useState(false)

    return (
        <nav>
            {!isLoggedIn ? 
                <div className="beforeLoginView">
                        <NavLink className="logo" to="/" >Pick And Roll</NavLink>
                        <div className="nav-links"> 
                        <button className="testbtn" onClick={()=>setIsLoggedIn(!isLoggedIn)}>test</button>
                        <NavLink className="link" to="/Recipe">레시피</NavLink> 
                        
                        <div className="link" onClick={()=> setShowSearchBox(true)} >검색</div> 
                        <SearchBox showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} /> 
                        
         
                        <div className="link" to="/Login" onClick={()=> setOpenLogin(true)} >로그인</div> 
                        {openLogin ?  <LoginForm openLogin={openLogin} setOpenLogin={setOpenLogin} /> : null}
                        
                    </div>
                </div>
            :
            <div className="afterLoginView">
                <NavLink className="logo" to="/" >Pick And Roll</NavLink>
                <div className="nav-links"> 
                <button className="testbtn" onClick={()=>setIsLoggedIn(!isLoggedIn)}>test</button>
                <NavLink className="link" to="/recipe">레시피</NavLink> 
                <div className="link" onClick={()=> setShowSearchBox(true)} >검색</div> 
                <SearchBox showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} /> 
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



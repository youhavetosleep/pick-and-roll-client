import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from "../Context/authContext"
import { NavLink } from "react-router-dom";
import LoginFormModal from './modal/loginFromModal';
import SearchBoxModal from "./modal/searchBoxModal";
import MenuModal from './modal/menuModal';
import { FaAlignJustify } from 'react-icons/fa';

const NavbarComponent = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const [openLogin, setOpenLogin] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false)


  const changeMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <Nav>
      {!isLoggedIn ? 
        <BeforeLoginView>
          <Logo><NavLink to="/" >Pick And Roll</NavLink></Logo>
          <MenuLinks> 
            <TestBtn onClick={()=>setIsLoggedIn(!isLoggedIn)}>test</TestBtn>
            <Link><NavLink to="/Recipe">레시피</NavLink></Link> 
            <Link onClick={()=> setShowSearchBox(true)}>검색</Link> 
            <SearchBoxModal showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} /> 
            <Link to="/Login" onClick={()=> setOpenLogin(true)}>로그인</Link>
            {openLogin ?  <LoginFormModal openLogin={openLogin} setOpenLogin={setOpenLogin} /> : null}
          </MenuLinks>
          <MenuIcon onClick={changeMenu}><FaAlignJustify /></MenuIcon>
          {openMenu ? <MenuModal openMenu={openMenu} setOpenMenu={setOpenMenu} /> : null}
        </BeforeLoginView>
      :
        <AfterLoginView>
          <Logo><NavLink to="/" >Pick And Roll</NavLink></Logo>
          <MenuLinks> 
            <TestBtn onClick={()=>setIsLoggedIn(!isLoggedIn)}>test</TestBtn>
            <Link><NavLink to="/recipe">레시피</NavLink></Link> 
            <Link onClick={()=> setShowSearchBox(true)} >검색</Link>
            <SearchBoxModal showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox} /> 
            <Link><NavLink to="/postWrite">새 글 작성</NavLink></Link>
            <Link><NavLink to="/users">사용자이름</NavLink> </Link>
            <Link><NavLink to="/Login">로그아웃</NavLink></Link>
          </MenuLinks>
          <MenuIcon onClick={changeMenu}><FaAlignJustify /></MenuIcon>
          {openMenu ? <MenuModal openMenu={openMenu} changeMenu={changeMenu} /> : null}
        </AfterLoginView>
      }

    </Nav>
  )
  }


const Nav = styled.nav`
  background-color:rgb(243, 200, 18);
  align-items: center;
  margin: 0px;

`
const MenuLinks = styled.div`
  display: flex;
  @media (max-width: 750px) {
  display:none;
}
`
const BeforeLoginView = styled.div`
    display: flex;
    justify-content : space-between;
    align-items: center;
    @media (max-width: 750px) {
      height : 43px;
    }
`
const AfterLoginView = styled.div`
    display: flex;
    justify-content : space-between;
    align-items: center;
    @media (max-width: 750px) {
      height : 43px;
    }
`

const MenuIcon  = styled.div`
    display : none;
    height : 25px;
    margin-right : 8px;
    @media (max-width: 750px) {
      display : inline-block;
      color : white;
      font-size : 25px;
    }
` 

const Logo = styled.div`
    text-decoration: none;
    font-size: 26px;
    color: white;
    margin-right: 16px;
`

const Link = styled.div`
    text-align:end;
    margin: 10px;
    font-size: 18px;
    text-decoration: none;
    color: white;
    margin-right: 2rem;
  :hover {
    cursor: pointer;
  }
`
const TestBtn = styled.button`
    border: solid, 1px, gray;
    text-decoration: none;
    background-color: rgb(255, 120, 47);
    height: 25px;
    margin-top: 8px;
    color: white;
    border: 1px solid transparent;
    padding: 5px 12px;
  }
  .testbtn:hover {
    cursor: pointer;
`




// nav {
//     background-color:rgb(243, 200, 18);
//     align-items: center;
//     margin: 0px;
//     height: 40px;
//   }
  
//   .beforeLoginView {
//     display: flex;
//     justify-content : space-between;
  
//   }
//   .afterLoginView {
//     display: flex;
//     width :50;
//     justify-content : space-between;
  
//   }
//   .nav-links {
//     display: flex;
//   }
  
//   .logo {
//     text-decoration: none;
//     font-size: 26px;
//     color: white;
//     margin-right: 16px;
  
//   }
  
//   .testbtn {
//     border: solid, 1px, gray;
//     text-decoration: none;
//     background-color: rgb(255, 120, 47);
//     height: 25px;
//     margin-top: 8px;
//     color: white;
//     border: 1px solid transparent;
//     padding: 5px 12px;
//   }
//   .testbtn:hover {
//     cursor: pointer;
//   }
  
//   div .link {
//     cursor: pointer;
//   }
  
//   .link {
//     text-align:end;
//     margin: 10px;
//     font-size: 18px;
//     text-decoration: none;
//     color: white;
//     margin-right: 2rem;
//   }
  
//   .link:hover {
//     text-decoration: none;
//   }
  
//   .active {
//     color: white;
//     margin-left: 1rem;
//     align-items: center;
//   }
  


export default NavbarComponent
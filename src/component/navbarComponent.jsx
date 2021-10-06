import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { NavLink as NavLinkLogo } from 'react-router-dom'
import { NavLink as NavLinkElement } from 'react-router-dom'
import axios from 'axios'
import { FaAlignJustify } from 'react-icons/fa'
import { AuthContext } from '../Context/authContext'
import { UserContext } from '../Context/userContext'
import LoginFormModal from './modal/loginFromModal'
import SearchBoxModal from './modal/searchBoxModal'
import MenuModal from './modal/menuModal'

const NavbarComponent = ({ handleLogin, handleLogout }) => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
	const { userInfo, setUserInfo } = useContext(UserContext);
  const [openLogin, setOpenLogin] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const changeMenu = () => {
    setOpenMenu(!openMenu)
    console.log(openMenu)
  }

	const logout = async () => {
		await axios.post('https://localhost:4000/users/logout')
		.then((res) => {	
      handleLogout()
      setOpenLogin(false)
		})
	}
    return (
      <Nav>
      {!isLoggedIn ? (
        <BeforeLoginView>
          <Logo className="logo" to="/">
            Pick And Roll
          </Logo>

          <MenuLinks>
            <TestBtn onClick={() => setIsLoggedIn(!isLoggedIn)}>test</TestBtn>

            <NavElement to="/Recipe">레시피</NavElement>

            <ChangeClick onClick={() => setShowSearchBox(true)}>
              검색
            </ChangeClick>
            <SearchBoxModal
              showSearchBox={showSearchBox}
              setShowSearchBox={setShowSearchBox}
            />
            <ChangeClick to="/" onClick={() => setOpenLogin(true)}>
              로그인
            </ChangeClick>
            {openLogin ? (
              <LoginFormModal
                handleLogin ={handleLogin}
                openLogin={openLogin}
                setOpenLogin={setOpenLogin}
              />
            ) : null}
          </MenuLinks>
          <MenuIcon onClick={changeMenu}>
            <FaAlignJustify />
          </MenuIcon>
          {openMenu ? (
            <MenuModal isLoggedIn={isLoggedIn} openMenu={openMenu} changeMenu={changeMenu} />
          ) : null}
        </BeforeLoginView>
      ) : (
        <AfterLoginView>
          <Logo to="/">Pick & Roll</Logo>
          <MenuLinks>
            <TestBtn onClick={() => setIsLoggedIn(!isLoggedIn)}>test</TestBtn>
            <NavElement to="/recipe">레시피</NavElement>
            <ChangeClick onClick={() => setShowSearchBox(true)}>
              검색
            </ChangeClick>
            <SearchBoxModal
              showSearchBox={showSearchBox}
              setShowSearchBox={setShowSearchBox}
            />
            <NavElement to='/write'>새 글 작성</NavElement>
            <NavElement to={`/mypage/${userInfo.email}`}>{userInfo.name}님</NavElement>
            <NavElement to="/" onClick={logout}>로그아웃</NavElement>
          </MenuLinks>
          <MenuIcon onClick={changeMenu}>
            <FaAlignJustify />
          </MenuIcon>
          {openMenu ? (
            <MenuModal isLoggedIn={isLoggedIn} openMenu={openMenu} changeMenu={changeMenu} />
          ) : null}
        </AfterLoginView>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: rgb(243, 200, 18);
  align-items: center;
  margin: 0px;
`
const MenuLinks = styled.div`
  display: flex;
  @media (max-width: 750px) {
    display: none;
  }
`
const BeforeLoginView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    height: 43px;
  }
`
const AfterLoginView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 750px) {
    height: 43px;
  }
`

const MenuIcon = styled.div`
  display: none;
  height: 25px;
  margin-right: 8px;
  @media (max-width: 750px) {
    display: inline-block;
    color: white;
    font-size: 25px;
  }
`

const Logo = styled(NavLinkLogo)`
  text-decoration: none;
  font-size: 26px;
  color: white;
  margin-right: 16px;
`
const ChangeClick = styled.div`
  text-align: end;
  margin: 10px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  margin-right: 2rem;
  :hover {
    cursor: pointer;
  }
`

const NavElement = styled(NavLinkElement)`
  text-align: end;
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
  
  .testbtn:hover {
    cursor: pointer;
  }
`

export default NavbarComponent

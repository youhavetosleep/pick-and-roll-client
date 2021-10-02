import React, { useState } from 'react'
import styled from 'styled-components'
import MenuComponent from '../component/menuComponent'
import MyFavorteComponent from '../component/mypage/myFavorteComponent'
const Users = () => {
    
    const [openFavorte, setOpenFavorte] = useState(false)
    const [openMyInfo, setOpenMyInfo] = useState(false)
    const [openMyRecipe, setOpenMyRecipe] = useState(false)
    
    // <div className="link" to="/Login" onClick={()=> setOpenLogin(true)} >로그인</div> 
    // {openLogin ?  <LoginForm openLogin={openLogin} setOpenLogin={setOpenLogin} /> : null}

return (
    <Warp>
        <p>MenuComponent</p>
        <ul>
        <li className="favorite" onClick={()=> setOpenFavorte(true)}>즐겨찾기</li>
        {openFavorte ?  <MyFavorteComponent openLogin={openFavorte} setOpenLogin={setOpenFavorte} /> : null}
        <li className="myRecipe">나의 레시피</li>
        <li className="myInfo">나의 정보</li>
        </ul>
    </Warp>
)
};
    const Warp = styled.div`
    margin : 0;
    border : 0;
    padding : 0;
    height : 1000px;
    width : 200px;
    background-color : green;
`




export default Users

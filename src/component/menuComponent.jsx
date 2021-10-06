import React , { useState,useRef, useEffect } from 'react'
import styled from 'styled-components';

import MyFavorteComponent from '../component/mypage/myFavorteComponent'
import MyInfoComponent from '../component/mypage/myInfoComponent'
import MyRecipeComponent from '../component/mypage/myRecipeComponent'

const MenuComponent = (props) => {

  const [page, setPage] = useState('myInfo')
  const [show, setShow] = useState(false)

  const changeFavorite = () => setPage('favorite')
  const changeMyRecipe = () => setPage('myRecipe')
  const changeMyInfo = () => setPage('myInfo')
  // transform의 translateX를 0으로 설정 

  useEffect(()=> {
    setShow(true)
  }, [])



return (
  <Wrap>

      <Menu className={show ? 'showM' : ""}>
      
      <MenuTitle>MenuComponent</MenuTitle>

      <List className="favorite" onClick={changeFavorite} >즐겨찾기</List>
      <List className="myRecipe" onClick={changeMyRecipe} >나의 레시피</List>
      <List className="myInfo" onClick={changeMyInfo} >나의 정보</List>
      </Menu>
      <ContentWapper>
      {(() => {
      switch (page) {
          case 'favorite':
          return <MyFavorteComponent />
          case 'myInfo':
          return <MyInfoComponent />
          case 'myRecipe':
          return <MyRecipeComponent />
          default:
      }
      })()}
      </ContentWapper>
  </Wrap>
)
};

const Wrap = styled.div`
  position : relative; 
  height : 700px;
  display : flex;
  justify-content: flex-end;


  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content : flex-start;
  }
  .showM {
    transform : translateX(0);
    animation-duration : 1s;
    animation-name : show;
  }
  @keyframes show{
    from{
      transform : translateX(-100%);
    }
    to{
      transform : translateX(0);
    }
  }

  ::after {
    display : inline-block ;
    clear: both;
    content : "";
  }
`
const Menu = styled.div`
  z-index : 50;
  left : 0;
  transform : translateX(-100%);


  position : fixed; 
  margin : 0;
  border : 0;
  padding : 0;
  height : 700px;
  width : 273px;
  background-color : green;
  color : white;

  @media (max-width: 1200px) {
  position : static;
  display : flex;
  height : 50px;
  width : 100%;
  align-items: center;
}
`

const ContentWapper = styled.div`
  margin-top : 30px ;
  width : calc(100% - 273px);

  @media (max-width: 1200px) {
  width : 100%;
}
`

const MenuTitle =  styled.div`
  width : 100%;
  text-align: center;
  font-size : 30px;
  padding : 30px 0;
  @media (max-width: 1200px) {
    display : none;
  }
`
const List = styled.div`
  text-align: center;
  width : 100%;
  padding : 10px 0;

  margin-bottom : 5px;
  :hover {
    background-color: grey;
}

@media (max-width: 1200px) {
  margin : 0;
}
`
// 초록색의 포지션을 먹인다.
// 화면 밖에서 안으로 오도록 
// 

export default MenuComponent;
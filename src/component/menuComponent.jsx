import React from 'react';
import styled from 'styled-components';
const MenuComponent = (props) => {



  return (
  <Warp>
    <h1>MenuComponent</h1>
    <ul>
      <li>즐겨찾기</li>
      <li>나의 레시피</li>
      <li>나의 정보</li>
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



export default MenuComponent;
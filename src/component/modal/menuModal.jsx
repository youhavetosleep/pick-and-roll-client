import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const MenuModal = ({openMenu, changeMenu}) => {


  return (
    <Modal onclick={changeMenu} >
        <Form>
          <Container>
              MenuModal
              <NavLink to="/recipe">레시피</NavLink>
              <NavLink to="/postWrite">새 글 작성</NavLink>
              <NavLink to="/users">사용자이름</NavLink>
            <NavLink to="/Login">로그아웃</NavLink>
          </Container>
        </Form>
      </Modal>
  );
};

const Modal = styled.div`
  position : fixed; 
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display : flex;
  flex-direction : column;
  justify-content : center;
  transform : translateX(0);
  animation-duration : 1s;
  animation-name : show;
  @keyframes show{
  from{
    transform : translateY(-100%);
  }
  to{
    transform : translateY(0);
  }
  }
`
const Form = styled.div`
    width : auto;
    padding-top : 200px;
    margin-bottom: 180px;

`
const Container = styled.div`
width: 200px;
height: 400px;
background: white;
border-radius: 30px;
text-align : center;
display : flex;
flex-direction: column;
`
export default MenuModal;
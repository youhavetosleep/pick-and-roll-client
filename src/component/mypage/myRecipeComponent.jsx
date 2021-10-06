import React from 'react'
import styled from 'styled-components'
import GetImagesComponent from '../getImagesComponent'

const MyRecipeComponent = (props) => {


  return (
    <Contents>
      <TitleWrap><Title>나의 레시피</Title></TitleWrap>
      <GetImagesComponent />
    </Contents>
  )
}

const Contents = styled.div`
  flex-direction : column;
  margin : 0;
  padding : 0;
`

const TitleWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  width : 200px;
  align-items : center;
  text-align: center;
  font-weight : 900;
  margin : 5px 300px;
  font-size : 20px;
  font-family: 'Noto Sans KR', sans-serif;
  height : 30px;
  padding-top : 6px;
  color : #4f4f4f;
`


export default MyRecipeComponent;
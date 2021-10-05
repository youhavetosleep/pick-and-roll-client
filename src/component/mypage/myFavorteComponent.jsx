import React from 'react'
import styled from 'styled-components'
import GetImagesComponent from '../getImagesComponent'

const MyFavorteComponent = (props) => {


  return (
    <Contents>
      <TitleWrap><Title>즐겨찾기</Title></TitleWrap>
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
  border: solid 1px;
  margin : 5px 300px;
  font-size : 20px;
  border-radius: 15px;
  height : 30px;
  padding-top : 6px;
`
export default MyFavorteComponent;
import React from 'react'
import {
  Card,
  Name,
  NameText,
  Fixed,
  Description,
  NoTextarea,
  BottomContents,
  CreateDate,
  Email,
} from './editMyInfoCss/editMyInfoCss'

const ShowInfoComponent = ({ userInfo }) => {
  return (
    <Card>
      <Name>
        <NameText>닉네임</NameText>
        <Fixed>{userInfo.name}</Fixed>
      </Name>
      <Description>자기소개</Description>
      <NoTextarea 
      value={userInfo.description}
      />
      <BottomContents>
        <CreateDate>
          활동 시작일
          <br />
          {userInfo.createdAt}
        </CreateDate>
        <Email>
          이메일
          <br />
          {userInfo.email}
        </Email>
      </BottomContents>
    </Card>
  )
}

export default ShowInfoComponent

import React, { useState, useContext } from 'react'

import Swal from 'sweetalert2'
import {
  Card,
  Name,
  NameText,
  Input,
  NameButton,
  Description,
  Textarea,
  BottomContents,
  CreateDate,
  Email,
  DescriptionButton,
} from './editMyInfoCss/editMyInfoCss'
import { UserContext } from '../../Context/userContext'

const EditMyInfoComponent = () => {

  const [changeNickname, setChangeNickname] = useState('')
  const [changeDescription, setChangeDescription] = useState('자기소개 입니다.')

  const { userInfo, setUserInfo } = useContext(UserContext)
  const { id, email, createdAt } = userInfo
  // 닉네임 유효성 감사
  const nickname_Reg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/

  // const getUserInfo = async () => {
  //   await axios.get(`https://localhost:4000/users/${}`, {
  //     withCredentials: true
  //   })
  //   .then((res) => {
  //     console.log('res : ', res)
  //     const { id, email, name, description, createdAt } = res.data.data.userData
  //     setUserInfo({ id, email, name, description, createdAt })
  //   })
  // }
  // 로그인 상태에서 회원정보 수정하면, 현재 userinfo와 서버의 회원정보 업데이트를 업데이트 해야한다.
  // usecontext로 현재 상태를 바꿔주고
  // axios를 통해서 회원정보를 업데이트 한다.

  // axios를 통해 이미 등록된 닉네임인지 체크
  const checkNickname = () => {
    if (!nickname_Reg.test(changeNickname) || changeNickname === '') {
      Swal.fire({
        title: '닉네임을 다시 정해주세요',
        text: '닉네임은 한글, 영문, 숫자만 가능하며 2-10자리까지 가능합니다!',
        icon: 'warning',
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: '확인',
        confirmButtonColor: '#e8b229',
      })
      return
    }
    Swal.fire({
      title: '사용할 수 있는 닉네임입니다. ',
      icon: 'success',
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '확인',
      confirmButtonColor: '#e8b229',
      //useContext로 바꾸기
    })
  }

  const editDone = () => {
    setUserInfo({
      id,
      email,
      createdAt,
      name: changeNickname,
      description: changeDescription,
    })
    console.log(userInfo)

    Swal.fire({
      title: '정보가 수정되었습니다.',
      icon: 'success',
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '확인',
      confirmButtonColor: '#e8b229',
      //useContext로 바꾸기
    })
  }

  return (
    <Card>
      <Name>
        <NameText>닉네임</NameText>
        <Input
          onChange={(e) => {
            setChangeNickname(e.target.value)
          }}
        />
        <NameButton onClick={checkNickname}>확인</NameButton>
      </Name>

      <Description>자기소개</Description>
      <Textarea
        onChange={(e) => {
          setChangeDescription(e.target.value)
        }}
        placeholder="자기소개를 입력해주세요."
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
        <DescriptionButton onClick={editDone}>수정완료</DescriptionButton>
      </BottomContents>
    </Card>
  )
}

export default EditMyInfoComponent

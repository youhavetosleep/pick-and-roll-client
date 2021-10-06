import React, { useState, useContext, useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { UserContext } from '../../Context/userContext'
import {
  Card,
  Name,
  NameText,
  Input,
  NameButton,
} from './editMyInfoCss/editMyInfoCss'
const ChangePasswordComponent = () => {
  const [password, setPassword] = useState('')
  const [pwCheck, setPwCheck] = useState('')

  const { userInfo, setUserInfo } = useContext(UserContext)

  const [messagePassword, setMessagePassword] = useState('')
  const [messagePwCheck, setMessagePwCheck] = useState('')

  const history = useHistory()

  const password_Reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/

  const { email, name, description } = userInfo

  const _pw = useRef()
  const _pwChk = useRef()

  const checkPassWord = () => {
    if (!password_Reg.test(password)) {
      setMessagePassword(
        '(8~15자) 영문 대소문자/숫자/특수문자 모두 포함해야합니다!'
      )
      return
    }
    setMessagePassword('✔ 사용 가능한 비밀번호입니다!')
  }

  // 비밀번호 확인을 체크하기 위한 함수
  const doubleCheckPassWord = () => {
    if (password === '') {
      setMessagePassword('비밀번호를 먼저 입력해주세요!')
    } else if (password !== '' && !pwCheck) setMessagePwCheck('')
    else if (password !== pwCheck || !password_Reg.test(password))
      setMessagePwCheck('비밀번호를 다시 확인해주세요!')
    else if (password === pwCheck && password_Reg.test(password))
      setMessagePwCheck('✔ 비밀번호가 확인되었습니다!')
  }
  const changePw = async () => {
    if (password === '' || !password_Reg.test(password)) {
      _pw.current.focus()
      setMessagePassword(
        '(8~15자) 영문 대소문자/숫자/특수문자 모두 포함해야합니다!'
      )
      return
    } else if (pwCheck === '' || password !== pwCheck) {
      _pwChk.current.focus()
      setMessagePwCheck('비밀번호를 다시 확인해주세요!')
      return
    }
    await axios
      .post(
        'https://localhost:4000/users/signUp',
        {
          email,
          password,
          name,
          description,
        },
        {
          'Content-Type': 'application/json',
        }
      )
      .then((res) => {
        console.log(res)
      })
      // 현재 회원정보도 업데이트? 
      setUserInfo({
        password : password
      })
    history.push('/mypage')
  }

  return (
    <Card>
      <Name>
        <NameText>새로운 비밀번호</NameText>
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          ref={_pw}
        />
        <NameButton onClick={checkPassWord}>확인</NameButton>
        {messagePassword}
      </Name>
      <Name>
        <NameText>비밀번호 확인</NameText>
        <Input
          type="password"
          onChange={(e) => {
            setPwCheck(e.target.value)
          }}
          ref={_pwChk}
        />
        <NameButton onClick={doubleCheckPassWord}>확인</NameButton>
        {messagePwCheck}
      </Name>
      <NameButton onClick={changePw}>변경완료</NameButton>
    </Card>
  )
}

export default ChangePasswordComponent

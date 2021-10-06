import React, { useState, useEffect,useContext } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { FaMarker, FaKey } from 'react-icons/fa'
import axios from 'axios'
import { UserContext } from '../../Context/userContext'

const MyInfoComponent = (props) => {
  const [nickname, setNickname] = useState('김코딩')
  const [description, SetDescription] = useState('자기소개 입니다.')
  const [editMode, setEditMode] = useState(false)


  const nickname_Reg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/

  const { userInfo, setUserInfo } = useContext(UserContext) 
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


  // return (
  //   <Contents>
  //     <Title>나의 정보</Title>
  //     <Info>
  //       <Profile></Profile>
  //       <Card>
  //         <Name>{userInfo.name}</Name>
  //         <Description>
  //           {userInfo.description}
  //         </Description>
  //         <BottomContents>
  //           <CreateDate>활동 시작일<br />{userInfo.createdAt}</CreateDate>
  //           <Email>이메일<br />{userInfo.email}</Email>
  //         </BottomContents>
  //       </Card>
  //     </Info>
  //   </Contents>
  // )



  const infoEdit = () => {
    setEditMode(!editMode)
  }

  // axios를 통해 이미 등록된 닉네임인지 체크
  const checkNickname = () => {
    if (!nickname_Reg.test(nickname) || nickname === '') {
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
    <Contents>
      <TitleWrap>
        <Title>나의 정보</Title>
      </TitleWrap>
      <Info>
        <Profile></Profile>
        {!editMode ? (
          <Card>
            <Name>
              <NameText>닉네임</NameText>
              <Fixed>{nickname}</Fixed>
            </Name>
            <Description>자기소개</Description>
            <Textarea value={description} />
            <BottomContents>
              <CreateDate>
                활동 시작일
                <br />
                2017-11-20
              </CreateDate>
              <Email>
                이메일
                <br />
                pick@roll.com
              </Email>

            </BottomContents>
          </Card>
        ) : (
          <Card>
            <Name>
              <NameText>닉네임</NameText>
              <Input
                onChange={(e) => {
                  setNickname(e.target.value)
                }}
                value={nickname}
              />
              <NameButton onClick={checkNickname}>확인</NameButton>
            </Name>

            <Description>자기소개</Description>
            <Textarea
              onChange={(e) => {
                SetDescription(e.target.value)
              }}
              placeholder="자기소개를 입력해주세요."
            />

            <BottomContents>
              <CreateDate>
                활동 시작일
                <br />
                2017-11-20
              </CreateDate>
              <Email>
                이메일
                <br />
                pick@roll.com
              </Email>
              <DescriptionButton onClick={editDone}>
                수정완료
              </DescriptionButton>
            </BottomContents>
          </Card>
        )}
        <BtnWrap>
          <ReviseForm>
            <ReviseBtn>
              <FaMarker onClick={infoEdit} />
            </ReviseBtn>
            <ReviseText className ="fixed">
              사용자정보 수정
            </ReviseText>
          </ReviseForm>
          <ReviseForm>
            <ReviseBtn>
              <FaKey />
            </ReviseBtn>
            <ReviseText className ="fixed">
              비밀번호 수정
              </ReviseText>
          </ReviseForm>

        </BtnWrap>     
        </Info>
    </Contents>
        )
}


const Contents = styled.div`
  flex-direction: column;
  margin: 0;
  padding: 0;
`
const TitleWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  width: 200px;
  align-items: center;
  text-align: center;
  border: solid 1px;
  margin: 5px 300px;
  font-size: 20px;
  border-radius: 15px;
  height: 30px;
  padding-top: 6px;
`

const Info = styled.div`
  height: 300px;
  width : 847px;
  margin: 30px auto;
  display: flex;
  box-shadow: 10px 10px 20px #606060;

  @media (max-width: 1200px) {
    width : 370px;
    height : 500px;
    padding-right: 20px;
    box-sizing: border-box;
  }
`

const Profile = styled.div`
  width: 20%;
  background-color: rgb(32, 145, 28);

  @media (max-width:1200px) {
    display : none;
  }
`
const Card = styled.div`
  width: 60%;
  padding: 30px 20px 20px 50px;
  @media (max-width: 1200px) {
  padding : 10px;
  }
`

const Name = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
  width : 100%;
  }
`
const NameText = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
  margin-top: 1px;
  white-space: nowrap;
  @media (max-width: 1200px) {
  width : 30%;
  }
`
const NameButton = styled.button`
  width: 60px;
  height: 21px;
  margin-left: 10px;
  margin-top: 2px;
  text-decoration: none;
  border: solid 1px rgb(147, 147, 147);
  background-color: white;
  color: rgb(147, 147, 147);
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgb(243, 200, 18) 0 80px 0px 2px inset;
    border: solid 1px rgb(243, 200, 18);
  }
  @media (max-width: 1200px) {
  width : 20%;
  white-space : nowrap;
  }
`
const DescriptionButton = styled.button`
  width: 80px;
  height: 21px;
  margin-left: 3px;

  text-decoration: none;
  border: solid 1px rgb(147, 147, 147);
  background-color: white;
  color: rgb(147, 147, 147);
  :hover {
    color: rgba(255, 255, 255, 0.85);
    box-shadow: rgb(243, 200, 18) 0 80px 0px 2px inset;
    border: solid 1px rgb(243, 200, 18);
  }
  @media (max-width: 1200px) {
    order : 1;
    margin-left : 243px;
  }
`
const Fixed = styled.div`
  width: 150px;
  height: 23px;
  align-items: center;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  margin-left: 10px;
  display: flex;
  padding-left: 10px;
  text-align: center;
`
const Description = styled.div`
  padding-bottom: 5px;
`

const BottomContents = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction : column;
  }
`

const CreateDate = styled.div`
  width: 20%;
  padding: 12px;
  @media (max-width: 1200px) {
    width : 100%;
    order : 2;
  }
`

const Email = styled.div`
  padding: 12px;
  width: 30%;
  @media (max-width: 1200px) {
    width : 100%;
    order : 3;
  }
`

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 1200px) {
  padding : 2px 10px 0 0;
  width: 40%;
  height : 80px;
  }
`

const ReviseForm = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row-reverse;
  :hover .fixed {
    display : block;
  }
  @media (max-width: 1200px) {
  width: 140px;
  margin-top:7px;
  }
`

const ReviseBtn = styled.div`
  display: flex;
  font-size: 20px;
  :hover {
    color: rgb(243, 200, 18);
  }
  @media (max-width: 1200px) {
    margin-right : 10px;

  }
`

const ReviseText = styled.div`
  font-size: 15px;
  margin-right: 10px;
  display : none;
  color: rgb(243, 200, 18);
`

const Input = styled.input`
  width: 150px;
  height: 11px;
  align-items: center;
  padding: 5px 20px 5px 10px;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  margin-left: 10px;
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
  @media (max-width: 1200px) {
    width : 50%;
  }
`

const Textarea = styled.textarea`
  width: 341px;
  height: 70px;
  align-items: center;
  padding: 5px 10px 10px 10px;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  resize: none;
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 13px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
  @media (max-width: 1200px) {
    width : 300px;
  }
`

export default MyInfoComponent

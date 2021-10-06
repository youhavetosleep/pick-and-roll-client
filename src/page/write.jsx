import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';

import styled  from 'styled-components';

import Swal from 'sweetalert2';
import { BsUpload } from 'react-icons/bs'

import ContentImgComponent from '../component/ImgEncoding/contentImgsComponent'
import MainImgComponent from '../component/ImgEncoding/mainImgComponent'

const Write = (props) => {
  const Info = {
    title: "",
    introduction: "",
    category: "",
    requiredTime: 0,
    contents: [[1,""],[2,""],[3,""]],
    mainImg: "",
    contentImgs: [],
    ingredients: [[1,"",""],[2,"",""],[3,"",""]]
  }
  const [postInfo, setPostInfo] = useState(Info)
  const history = useHistory();

// 회원가입 데이터
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [pwCheck, setPwCheck] = useState("")
const [nickname, setNickname] = useState("")
const [description, setDescription] = useState("")

// 정확한 입력을 위한 메시지 표기 
const [messageEmail, setMessageEmail] = useState("");
const [messagePassword, setMessagePassword] = useState("");
const [messagePwCheck, setMessagePwCheck] = useState("");
const [messageNickname, setMessageNickname] = useState("");
const [messageDescription, setMessageDescription] = useState("");

// focus 이벤트를 주기 위한 Ref 
const _email = useRef();
const _pw = useRef();
const _pwChk = useRef();
const _nick = useRef();
const _des = useRef();

const {
  title,
  introduction,
  category,
  requiredTime,
  contents,
  mainImg,
  contentImgs,
  ingredients
} = postInfo


// 회원가입 버튼 
const signUp = (event) => {
    if (email === "") {
        _email.current.focus();
        setMessageEmail("이메일을 입력해주세요!");
        return;
    } else if (password === "") {
        _pw.current.focus();
        setMessagePassword("비밀번호를 입력해주세요!");
        return;
    } else if (pwCheck === "") {
        _pwChk.current.focus();
        setMessagePwCheck("비밀번호를 한번 더 입력해주세요!");
        return;
    } else if (nickname === "") {
        _nick.current.focus();
        setMessageNickname("닉네임을 입력해주세요!");
        return;
    } else if (description === "") {
        _des.current.focus();
        setMessageDescription("자기소개를 입력해주세요!");
        return;
    }
    //preventDefault는 창이 새로 고침되는 것을 막기 위해서 
    event.preventDefault()
    console.log(email, password, nickname, description)
    // 마지막으로 axios로 데이터를 넘겨준다. 
    Swal.fire({
        title: "회원가입이 완료되었습니다.",
        text: `모든 레시피를 확인해보세요! `,
        confirmButtonColor: "#d6d6d6",
        confirmButtonText: "확인",
    });
    history.push('/')
}

//이미지 파일 변환함수


return (
    <>
    <Wrapper>
    <TitleArea>
        <Title>레시피 작성</Title>
        <MainText> 본인 만의 노하우가 담긴 비법을 전수해주세요. </MainText>
    </TitleArea>
    <Form>
        <FormGroup>
            <Labal>제목
                <span className = 'require' >*</span>
            </Labal>
            <Input                     
                type="text" 
                placeholder="제목을 입력해주세요" 
                onChange = {(e) => {
                    
                }}
                ref={_email}
                
            />
            <CheckText>
                {messageEmail}
            </CheckText>
        </FormGroup>
        <FormGroup>
            <Labal>요리소개
                <span className = 'require' >*</span>
            </Labal>
            <Textarea                     
                type="text" 
                placeholder="요리에 특별한 사연이 있다면 알려주세요!" 
                onChange = {(e) => {
                   
                }}
               
                ref={_pw}
            />
            <CheckText>
                {messagePassword}
            </CheckText>
        </FormGroup>
        <FormGroup>
            <Labal> 메인 사진
                <span className = 'require' >*</span>
            </Labal>
            <MainImgComponent 
              postInfo={postInfo} 
              setPostInfo={setPostInfo}
              />
            <CheckText>
                {messagePwCheck}
            </CheckText>
        </FormGroup>
        <FormGroup>
            <Labal> 레시피 카테고리
                <span className = 'require' >*</span>
            </Labal>
            <Input                     
                type="text" 
                placeholder="카테고리" 
                onChange = {(e) => {
                    setNickname(e.target.value)
                }}
                ref={_nick}
                
            />
            <CheckText>
                {messageNickname}
            </CheckText>
        </FormGroup>
        <FormGroup>
            <Labal> 조리시간
                <span className = 'require' >*</span>
            </Labal>
            <Input                     
                type="text" 
                placeholder="조리시간" 
                onChange = {(e) => {
                    setNickname(e.target.value)
                }}
                ref={_nick}
                
            />
            <CheckText>
                {messageNickname}
            </CheckText>
        </FormGroup>
        <FormGroup>
            <Labal>요리 재료
                <span className = 'require' >*</span>
            </Labal>
            { ingredients.map( (ingredient, idx) => (
              <InlineBox key={idx}>
              <span>{ingredient[0]}.</span>  
              <Input 
              type="text" 
              // value={ingredient[1]}
              onChange={(e)=>{
                ingredient[1]=e.target.value
              }}
              />
              <Input 
              type="text" 
              value={ingredient[2]}
              onChange={(e)=>{
                ingredient[2]=e.target.value
              }}
              />
              </InlineBox>
  ))}
            <CheckText>
                {messageDescription}
            </CheckText>
        </FormGroup>
        <FormGroup>
            <Labal>요리 방법
                <span className = 'require' >*</span>
            </Labal>
            { contents.map( (content, idx) => (
              <InlineBox key={idx}>
              <span>{content[0]}.</span>  
              <Textarea 
              type="text" 
              // value={content[1]}
              onChange={(e)=>{
                content[1]=e.target.value
              }}
              />
              </InlineBox>
  ))}
            <CheckText>
                {messageDescription}
            </CheckText>
        </FormGroup>
        <FormGroup>
            <Labal>요리 사진
                <span className = 'require' >*</span>
            </Labal>
              <ContentImgComponent postInfo={postInfo} setPostInfo={setPostInfo}></ContentImgComponent>
            <CheckText>
                {messageDescription}
            </CheckText>
        </FormGroup>

        <FormGroup>
            <SignupBtn onClick={signUp}>
                등록하기
            </SignupBtn>
        </FormGroup>
    </Form>
</Wrapper>  
</>
  )
};

const Wrapper = styled.div`
    width: 100%;
  height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

const TitleArea = styled.div`
    width: 360px;
    margin: 50px auto 30px;
    font-size: 30px;
`

const Title = styled.div`
    width: 360px;
    height: 42px;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: rgb(77, 77, 77);
`
const MainText = styled.div`
    text-align : center;
    font-size : 12px;
    margin-left : 5px;
    margin-top : 10px;
    color : rgb(255, 162, 0);
`

const Form = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction: column;

    align-items:center;
    padding: 25px 0px;
`

const FormGroup = styled.div`
    display: block;
    margin-top : 15px;
    text-align : center;
    
`
const CheckText = styled.div`
    height : 3px;
    text-align : left;
    font-size : 11px;
    margin-left : 5px;
    margin-top : 3px;
    color : rgb(255, 162, 0);
`

const Labal = styled.div`
    text-align : left;
    margin-left : 4px;
    margin-bottom : 3px;
    .require {
        color : rgb(255, 162, 0);
        margin-left : 4px;
        line-height: 2;
    }
`

const Input = styled.input`
    align-items : center;
    margin: 25px 30px ;
    padding: 25px 100px 25px 100px;  
    border-radius: 8px;
    border: solid 2px #d2d2d2;
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
`
const Textarea = styled.textarea`
    width: 341px;
    height: 70px;
    align-items : center;
    padding: 5px 10px 10px 10px;  
    border-radius: 8px;
    border: solid 2px #d2d2d2;
    resize : none;
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
`

const SignupBtn = styled.button`
    width : 366px;
    text-align : center;
    align-items : center;
    padding : 0px 0px;
    background-color : rgb(243, 200, 18);
    height : 50px;
    border: 1px solid transparent;
border-radius: 13px;
    color : white;
    font-size : 17px;
`

const InlineBox = styled.div`
  display: inline-block;
  a{
    font-size: 30px;
  }		
`
export default Write;
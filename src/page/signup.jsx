<<<<<<< HEAD
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled  from 'styled-components';
import Swal from 'sweetalert2';

const Signup = () => {

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

// 이메일, 비밀번호 형식을 체크하는 정규 표현식 
const email_Reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const password_Reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
const nickname_Reg = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;

// axios를 통해 이미 등록된 이메일인지 체크
const checkEmail = () => {
    if (!email_Reg.test(email)) {
        setMessageEmail("이메일 형식에 맞게 작성해 주시기 바랍니다!");
        return;
    } setMessageEmail("✔ 사용 가능한 이메일입니다!");
};
=======
import React from 'react'
import SignupComponent from '../component/signupComponent'
>>>>>>> 553a543ab61a45aa2f202db63f9deec6e21151c1

const Signup = () => {
	return <SignupComponent />
}

export default Signup
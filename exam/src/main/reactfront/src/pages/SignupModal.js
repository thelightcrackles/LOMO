import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SignUpBlock = styled.div`
cursor:url('/img/defaultCursor.png') 2 2, auto;
.signUp-container{
    font-family: 'Noto Sans KR', sans-serif;
    width:680px;
    height:500px;
    background-color: #FAFAFA;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:36px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) inset;
    border-radius: 30px;

}
.header{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
}
.dp-check{
    color: #ADB5BD;
    font-size: 20px;
    font-weight: 400;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) inset;
    border-radius: 30px;
    padding:5px 10px;
    background-color:#FFF;
}
.signUp-text{
    margin:auto;
    font-size: 24px;
    font-weight: 700;
    
}

.close-btn{
    //margin-left:auto;
}
.signup-contents-container{
    width: 550px;
    height: 351px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}

input{
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) inset;
    width: 400px;
    height: 44px;
    border:0
}
.input-container{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
.pw-show-container{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:72px;
    font-weight:400;
}
.submit-Btn{
    width:155px;
    height:50px;
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25) inset;
    text-align:center;
    font-size:26px;
    font-weight:400;

    
    
}
.submit-container{
    display:flex;
    justify-content:center;
}
#input-id{
  cursor:url('/img/cursor/signup_id.png') 2 2, auto;
}
#input-pw{
  cursor:url('/img/cursor/signup_pw.png') 2 2, auto;
}
#input-pwCheck{
  cursor:url('/img/cursor/signup_pwCheck.png') 2 2, auto;
}
#input-name{
  cursor:url('/img/cursor/signup_name.png') 2 2, auto;
}

`
function SignupModal(props){
    const [userId,setUserId] = useState();
    const [userPw, setUserPw] = useState();
    const [userPwCheck, setUserPwCheck] = useState();
    const [userName, setUserName] = useState();
  
    return(
        <SignUpBlock>
        <form className='signUp-container'>
          <header className='header'>
            <div className='signUp-text'>회원가입</div>
            <svg className='close-btn' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" onClick={()=>{
             props.isSignUpModal(false)}}>
            <line x1="1" y1="-1" x2="26.6345" y2="-1" transform="matrix(0.69008 0.723733 -0.69008 0.723733 1 2)" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <line x1="1" y1="-1" x2="26.6345" y2="-1" transform="matrix(0.69008 -0.723733 0.69008 0.723733 1.92969 22)" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
  
          </header>
          <div className='signup-contents-container'>
          <label className='id-input input-container'>
            <input id='input-id'type='text' name='userId' value={userId}></input>
            <span className='dp-check'>중복확인</span>
          </label>
          <label className='pw-input input-container'>
            <input id='input-pw' type='password' name='userPw' value={userPw}></input>
            <div className='pw-show-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14ZM14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0Z" fill="#495057"/>
            </svg>
            <span></span><span>표시</span>
            </div>
          </label>
          <label className='pwCheck-input input-container'> 
            <input id='input-pwCheck' type='password' name='userPwCheck' value={userPwCheck}></input>
            <div className='pw-show-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14ZM14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0Z" fill="#495057"/>
            </svg>
            <span></span><span>표시</span>
            </div>
          </label>
          <label className='name-input input-container'>
            <input id='input-name' type='text' name='userName' value={userName}></input>
          </label>
          <label className='submit-container'>
            <div className='submit-Btn' type='submit' value='Submit'>완료</div>
          </label>
          </div> 
        </form> 
        
        </SignUpBlock>
    );
  }
  
  export default SignupModal;
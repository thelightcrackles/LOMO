import React from 'react';
import woman from './img/woman.svg';
import man from './img/man.svg';
import styled from 'styled-components';
import { useState } from 'react';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import {RightArrow, LeftArrow} from './Arrows';

const Style = styled.div`
.content-container{
    display:flex;
    flex-direction:column;
    //border: 1px solid blue;
    width:80vw;
    height:670px;
    justify-content:space-around;
    align-items:center;
}

.img-container{
    display:flex;
    justify-content:space-between;
    width:70%;
}
.sex-container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 471px;
    border: 1px solid black;
    width:471px;
    height:471px;
    cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;


}
.sex-container img{
    
}
.sex-container div{
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    margin-top:63px;
    
    
}
.text{
    font-family: Noto Sans KR;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
}
.clicked{
    background-color:#DAF1DD;
    transition: background-color 1s;
}
@media(max-width:800px){
    .text{
        font-family: Noto Sans KR;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
    }
    .sex-container{
        scale:0.7;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius: 471px;
        border: 1px solid black;
        cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
    
    
    }
    .img-container{
        display:flex;
        align-items:space-between;
        justify-content:space-between;
        width: min-content;
        width:100%;
        
    }
    #arrow-R{
        right:50px;
    }
    #arrow-L{
        left:50px;
    }
    .content-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
}
`

const ArrowStyle = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
position:fixed;
cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;

.arrow-text{
    color: #8BABFF;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px; /* 100% */
}
@media(max-width: 800px){
    .arrow-text{
        display:none;
    }
}

`

function ChooseSex(){
    let navigate = useNavigate();
    const [isClicked,setClick] = useState(null);
  
    
    
    return(
        <Style>
        <div className='content-container'>
            <div className='text'>성별을 선택하세요</div>
            <div className='img-container'>
                <div className={`man sex-container ${isClicked==='man'?'clicked':''}`} onClick={()=>{setClick('man')}}>
                    <img src={man}></img>
                    <div>남</div>
                </div>
                <div className={`woman sex-container ${isClicked==='woman'?'clicked':''}`} onClick={()=>{setClick('woman');}}>
                    <img src={woman}></img>
                    <div>여</div>
                </div>
                
            </div>
            <ArrowStyle id='arrow-R' onClick={()=>{navigate('/avatar/1')}}>
            <div className='arrow-text'>NEXT</div>
            <svg class='arrows' width="49" height="83" viewBox="0 0 49 83" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M2.15678 2.1665C1.47309 2.84878 0.930674 3.65921 0.560586 4.55139C0.190498 5.44357 0 6.39998 0 7.36587C0 8.33176 0.190498 9.28817 0.560586 10.1804C0.930674 11.0725 1.47309 11.883 2.15678 12.5652L30.7718 41.1802L2.15678 69.7952C0.777816 71.1742 0.00312281 73.0445 0.00312281 74.9946C0.00312281 76.9448 0.777816 78.815 2.15678 80.194C3.53574 81.573 5.40601 82.3476 7.35615 82.3476C9.30629 82.3476 11.1766 81.573 12.5555 80.194L46.4068 46.3427C47.0905 45.6605 47.6329 44.85 48.003 43.9578C48.3731 43.0657 48.5635 42.1093 48.5635 41.1434C48.5635 40.1775 48.3731 39.2211 48.003 38.3289C47.6329 37.4367 47.0905 36.6263 46.4068 35.944L12.5555 2.09275C9.75303 -0.709755 5.03303 -0.709753 2.15678 2.1665Z" 
                fill="#8BABFF"/>
            </svg >
        </ArrowStyle>
            
            
        </div>
        </Style>
    )
}
export default ChooseSex;
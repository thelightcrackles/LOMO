import React from 'react';
import styled from 'styled-components';

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
function RightArrow({setStep}){
    const handleStep=()=>{
        setStep('up')
    }
    return(
        <ArrowStyle id='arrow-R'>
            <div className='arrow-text'>NEXT</div>
            <svg class='arrows' width="49" height="83" viewBox="0 0 49 83" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleStep}>
                <path d="M2.15678 2.1665C1.47309 2.84878 0.930674 3.65921 0.560586 4.55139C0.190498 5.44357 0 6.39998 0 7.36587C0 8.33176 0.190498 9.28817 0.560586 10.1804C0.930674 11.0725 1.47309 11.883 2.15678 12.5652L30.7718 41.1802L2.15678 69.7952C0.777816 71.1742 0.00312281 73.0445 0.00312281 74.9946C0.00312281 76.9448 0.777816 78.815 2.15678 80.194C3.53574 81.573 5.40601 82.3476 7.35615 82.3476C9.30629 82.3476 11.1766 81.573 12.5555 80.194L46.4068 46.3427C47.0905 45.6605 47.6329 44.85 48.003 43.9578C48.3731 43.0657 48.5635 42.1093 48.5635 41.1434C48.5635 40.1775 48.3731 39.2211 48.003 38.3289C47.6329 37.4367 47.0905 36.6263 46.4068 35.944L12.5555 2.09275C9.75303 -0.709755 5.03303 -0.709753 2.15678 2.1665Z" 
                fill="#8BABFF"/>
            </svg >
        </ArrowStyle>
    )
}

function LeftArrow({setStep}){
    const handleStep=()=>{
        setStep('down')
    }
    return(
        <ArrowStyle id='arrow-L'>
        <svg class='arrows'  width="49" height="83" viewBox="0 0 49 83" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleStep}>
            <path d="M46.4067 80.1812C47.0904 79.4989 47.6328 78.6884 48.0029 77.7963C48.373 76.9041 48.5635 75.9477 48.5635 74.9818C48.5635 74.0159 48.373 73.0595 48.0029 72.1673C47.6328 71.2751 47.0904 70.4647 46.4067 69.7824L17.7917 41.1674L46.4067 12.5524C47.7857 11.1734 48.5604 9.30318 48.5604 7.35304C48.5604 5.4029 47.7857 3.53262 46.4067 2.15366C45.0277 0.774696 43.1575 1.52588e-05 41.2073 1.52588e-05C39.2572 1.52588e-05 37.3869 0.774696 36.008 2.15366L2.1567 36.0049C1.47301 36.6872 0.930595 37.4976 0.560509 38.3898C0.190422 39.282 -6.86646e-05 40.2384 -6.86646e-05 41.2043C-6.86646e-05 42.1702 0.190422 43.1266 0.560509 44.0188C0.930595 44.9109 1.47301 45.7214 2.1567 46.4037L36.008 80.2549C38.8105 83.0574 43.5305 83.0574 46.4067 80.1812Z" 
            fill="#8BABFF" />
        </svg >
        <div className='arrow-text'>PREV</div>
        </ArrowStyle>
    )
}

export {RightArrow, LeftArrow};
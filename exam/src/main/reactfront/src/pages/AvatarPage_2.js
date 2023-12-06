import React from 'react';
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import MakingAvatar from './MakingAvatar';
import sexBar from './img/progressBar/progressBar_sex.svg'
import trapezialBar from './img/progressBar/progressBar_trapezial.svg'
import shoulderBar from './img/progressBar/progressBar_shoulder.svg';
import waistBar from './img/progressBar/progressBar_waist.svg';
import hipBar from './img/progressBar/progressBar_hip.svg';
import femurBar from './img/progressBar/progressBar_femur.svg';
import logo from './img/logo_2.svg';
import {RightArrow, LeftArrow} from './Arrows';
import {PhotoUploadBox, AvatarControllerBox} from './Boxes';
import { useParams } from 'react-router-dom';

import ChooseSex from './ChooseSex';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';

const AvatarPageStyle = styled.div`
margin:3px;
font-family: 'Noto Sans KR', sans-serif;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
cursor: url('/img/cursor/defaultCursor.png') 2 2, auto;
.avatar-container{
    width:1920px;
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
}
.avatar-and-progress-bar{
    display:flex;
    width:100%;
    flex-direction:row;
    //border: 1px solid red;
    justify-content:space-around;
    align-items:center;
    margin-top:50px;
}
.progress-bar{
    position:absolute;
    top:56px;
}
.logo{
    position:absolute;
    top:25px;
    left:15px;
    cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
}

#arrow-R{
    right:50px;
}
#arrow-L{
    left:50px;
}
.progress-bar{
    margin-bottom:10px;
}

.making-avatar{
    display:flex;
    //border: 1px solid blue;
    width:80vw;
    height:676px;
    justify-content:space-around;
    align-items:center;
    
}



.controller-container{

}


.image-container{
    width:280px;
    display:flex;
    justify-content:center;
    height:70vh;
}
.image-container img{
    
scale:1;
padding:10px;

}




.shoulder-icon{
    cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
}
.uploaded-img{
    position:fixed;
    bottom:200px;
}
`

const MediaQueryStyle = styled.div`
@media(max-width: 800px) {
    
    .logo{
        width:100px;
    }
    .progress-bar{
        width:300px;
        margin-bottom:0;
    }
    
    .image-container{
        width:60vw;
        height:60vh;
        
    }
    .avatar-img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
    .making-avatar{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .arrows{
        position:fixed;
        top:200px;
        scale:0.7;
        cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
    }
    #arrow-R{
        right:30px;
        
    }
    #arrow-L{
        left:30px;
    }
  }
`
function AvatarPage_2(){
    let navigate = useNavigate();
    const [progressBarImg, setProgressBarImg] = useState([sexBar,shoulderBar,trapezialBar,hipBar,femurBar,waistBar]);
    const [step, setStep] = useState(1);
    const [des,setDes] = useState(['성별','어깨를','승모근을','골반을','대퇴골을','허리를'])
    const [rangeVal,setRangeVal] = useState('3')
    const [imageArray, setImageArray] = useState(['10111','20111','30111','40111','50111']);
    const [isTrapezial,setIsTrapezial] = useState(false);
    const [finalRangeVal,setFinalRangeVal] = useState([1,0,1,1,1])
    //사용자의 슬라이더 바 value를 추적하는 함수
    const userRangeInput = (e) =>{
        setRangeVal(e.target.value)
    }
    const handleStep = (upDown) =>{
        
        handleFinalRangeVal(step);
        if(upDown === 'up'){
            setStep(step+1);
        }else if(upDown === 'down'){
            setStep(step-1);
        }

        
    }
    function handleFinalRangeVal(step){
        if(rangeVal >-1 && rangeVal<6){
            const newArray =[...finalRangeVal];
            newArray[step-1] = Number(rangeVal);
            setFinalRangeVal(newArray);

        }else{
            console.log('rangeVal 범위 오류');
        }
        
    }

    useEffect(()=>{
        //console.log('new array :',imageArray);
        
        //페이지 컨트롤
        if(step==0){
            navigate('/avatar/0')
        }else if(step==6){
            navigate('/avatar/loading' ,{ state: finalRangeVal });
        }else if(step<0){
            setStep(0);
            navigate('/avatar/0');
        }
        

        if(step>2){
            setRangeVal(3);
        }

        if(step==2){
            setRangeVal(1);
            setIsTrapezial(true);
        }else{
            setIsTrapezial(false);
        }

        // step에 맞게 이미지 배열 변경 
        makingArray(step)
        //console.log('final range :',finalRangeVal);
    },[step])
   
    function makingArray(step){
        //! 더 효율적인 방법 고민 필요! step이 많아진다면 .. 
        let newArray = [];
        if(step==2){
            for(let i=0;i<6;i++){
                if(i<2){
                    newArray.push(`${finalRangeVal[0]}${i}${finalRangeVal[2]}${finalRangeVal[3]}${finalRangeVal[4]}`);

                }else{
                    newArray.push(`${finalRangeVal[0]}${1}${finalRangeVal[2]}${finalRangeVal[3]}${finalRangeVal[4]}`);
                }
            }
            console.log('new array :',newArray);
            console.log(isTrapezial);

            
        }else if(step==3){
            for(let i=1;i<6;i++){
                newArray.push(`${finalRangeVal[0]}${finalRangeVal[1]}${i}${finalRangeVal[3]}${finalRangeVal[4]}`);
                console.log('new array :',newArray);
            }
        }else if(step==4){
            for(let i=1;i<6;i++){
                newArray.push(`${finalRangeVal[0]}${finalRangeVal[1]}${finalRangeVal[2]}${i}${finalRangeVal[4]}`);
                console.log('new array :',newArray);
            }
        }else if(step==5){
            for(let i=1;i<6;i++){
                newArray.push(`${finalRangeVal[0]}${finalRangeVal[1]}${finalRangeVal[2]}${finalRangeVal[3]}${i}`);
                console.log('new array :',newArray);
            }
        }else{
            newArray= ['10111','20111','30111','40111','50111']
        }
        setImageArray(newArray);
    }

    
    return(
        <MediaQueryStyle>
        <AvatarPageStyle>
            <div className='main-container'>
                <img className='logo' src={logo} alt='logo image' onClick={()=>navigate('/')}/>
                <div className='avatar-container'>
                <ProgressBar className='progress-bar' imgSrc={progressBarImg[step]} imgAlt={'progress bar'}/>
                    <div className='avatar-and-progress-bar'>
                        <LeftArrow className='arrows' setStep={handleStep} />
                        <div className='making-avatar'>
                            <PhotoUploadBox />
                            
                            <div className='image-container'>
                                {isTrapezial && (
                                <img className='avatar-img' src={`/img/avatar/${imageArray[rangeVal] || imageArray[0]}.svg`} alt='Avatar' />
                                )}
                                {!isTrapezial && (
                                <img className='avatar-img' src={`/img/avatar/${imageArray[rangeVal - 1] || imageArray[0]}.svg`} alt='Avatar' />
                                )}
                            </div>
                            <AvatarControllerBox description={des[step]} rangeVal={rangeVal} userRangeInput={userRangeInput} isTrapezial={isTrapezial}/>
                        </div>
                        <RightArrow className='arrows' setStep={handleStep} />
                    </div>
                    
                    

                    </div>
                </div>
            </AvatarPageStyle>
            </MediaQueryStyle>

    )
            
}

export default AvatarPage_2;

function ProgressBar({imgSrc, imgAlt}){
    return(
        <img className='progress-bar' src={imgSrc} alt={imgAlt} />
    )
}
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
}
.arrows{
    position:fixed;
    cursor:pointer;
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

.box{
    margin: 0 10%;
    width: 376px;
    height: 193px;
    border: 1px solid #000;
    background: #FFF;    
    border-radius:20px;
    margin-bottom:400px;
    font-weight: 600;
    font-size: 16px;
    text-align:center;
    display:flex;
    justify-content:center;
}
.image-container{
    width:250px;
    display:flex;
    justify-content:center;
}
.image-container img{
scale:1;
padding:10px;

}
.upload-btn-container{
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
}
input[type="file"]::-webkit-file-upload-button{
    display:none;
 }

.text-container{
    width: 280px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:5px;

}
.trapezial-container{
    width: 280px;
    display:flex;
    flex-direction:column;

}
.icon-container{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}
.add-photo{
    text-decoration: underline;
    cursor:pointer;
}
.slider-input{
    width:306px;
    -webkit-appearance: none;
}
.slider-input::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    background:url('/img/sliderBar.png');
    width: 306px;
height: 12px;
}
.slider-input::-webkit-slider-thumb{
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -12px; /* Centers thumb on the track */
    background:url('/img/sliderThumb.png');
    width:30px;
    height:30px;
       
    

}
.guide-text{
    display:flex;
    width:100%;
    margin-top:-30px;
    justify-content:space-between;
}
.shoulder-icon{
    cursor:pointer;
}
.uploaded-img{
    position:fixed;
    bottom:200px;
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
        console.log('new array :',imageArray);
        
        //페이지 컨트롤
        if(step==0){
            navigate('/avatar/0')
        }else if(step==6){
            navigate('/avatar/result');
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
        console.log('final range :',finalRangeVal);
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
        <AvatarPageStyle>
            <div className='main-container'>
                <img className='logo' src={logo} alt='logo image' onClick={()=>navigate('/')}/>
                <div className='avatar-container'>
                <ProgressBar imgSrc={progressBarImg[step]} imgAlt={'progress bar'}/>
                    <div className='avatar-and-progress-bar'>
                        <LeftArrow className='arrows' setStep={handleStep} />
                        <div className='making-avatar'>
                            <PhotoUploadBox className='box photo-container'/>
                            
                            <div className='image-container'>
                            
                            {isTrapezial && (
                            <img className='avatar-img' src={`/img/avatar/${imageArray[rangeVal] || imageArray[0]}.png`} alt='Avatar' />
                            )}
                            {!isTrapezial && (
                            <img className='avatar-img' src={`/img/avatar/${imageArray[rangeVal - 1] || imageArray[0]}.png`} alt='Avatar' />
                            )}
                            
                            

                            </div>
                            <AvatarControllerBox description={des[step]} rangeVal={rangeVal} userRangeInput={userRangeInput} isTrapezial={isTrapezial}/>
                        </div>
                        <RightArrow className='arrows' setStep={handleStep} />
                    </div>
                    
                    

                    </div>
                </div>
            </AvatarPageStyle>
        
    )
            
}

export default AvatarPage_2;

function ProgressBar({imgSrc, imgAlt}){
    return(
        <img className='progress-bar' src={imgSrc} alt={imgAlt} />
    )
}
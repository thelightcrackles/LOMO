import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Style = styled.div`
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
.image-container img{
scale:1;
padding:10px;
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

`
function MakingAvatar(){
    const [rangeVal,setRangeVal] = useState('')
    const userRangeInput = (e) =>{
        setRangeVal(e.target.value)
    }
    return(
        <Style>

        
        <div className='making-avatar'>
            <div className='box photo-container'>
                <div className='text-container'>
                    사진을 업로드하세요.<br/><br/>
                    본인의 체형이 잘 나온 사진을 업로드하여 가장 '나다운' 몸을 만들어보세요.<br/><br/>
                    <div className='add-photo'>사진 추가하기</div>
                </div>
            </div>
            <div className='image-container'>
                <img className='avatar-img' src='/img/avatar1.png'/>
            </div>
            <div className='box controller-container'>
            <div className='text-container'>
            <p>너비를 선택해주세요</p>
                <input class='slider-input' type="range" min="1" max="5" value={rangeVal} onChange={userRangeInput}/>
                <div className='guide-text'>
                    <span>좁은</span>
                    <span>넓은</span>
                </div>
            </div>
            </div>
        </div>
        </Style>
    )
}
export default MakingAvatar;
import React from 'react';
import styled from 'styled-components';
import ScrollHorizontal from 'react-scroll-horizontal';
import background from './img/snowBG.svg'
import animal from './img/animal/namu.svg'
import {Text_upper1,Text_upper2,Text_upper3,Text_upper4,Text_upper5,Text_upper6,Text_upper7,Text_upper8, Text_lower1,Text_lower2,Text_lower3,Text_lower4,Text_lower5,Text_lower6,Text_lower7,Text_lower8} from './text';

const ResultPageStyle=styled.div`
width:100vw;

overflow: auto;
display:flex;

font-family: 'Noto Sans KR', sans-serif;


.avatar-section{
    position:fixed;
    top:0;
    width:28vw;
    height:100vh;
    background : #B2E1F1;
    

}
.text-section{
    width: 72.7vw;
    margin-left:auto;
   height:100vh;
   //border:1px solid red;
   position:fixed;
   top:0;
   left:28vw;
    
}

`

function Result(){
    return(
        <ResultPageStyle>
            <div className='avatar-section' >
                <AvatarSection/>
            </div>
            <div className='text-section' id='scroll-horizontal' >
                <ScrollHorizontal reverseScroll = { true } >
                    <TextSection_upper />
                    <TextSection_lower/>
                    <FashionRef/>
                    <PlusContent/>

                </ScrollHorizontal>
            </div>
        </ResultPageStyle>
    )
}
export default Result;


const AvatarSectionStyle = styled.div`
border-right:2px solid black;
box-sizing: border-box;


.title-section{
    font-family: Noto Sans KR;
    font-weight:700;
    font-size:2rem;
    color:black;
    width:60%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    font-family: Noto Sans KR;
font-size: 48px;
font-style: normal;
font-weight: 800;
line-height: 60px; 
margin-top:10px;
   
}
.title-upper{
    margin-right:auto;
}
.title-lower{
    margin-left:auto;
    display:flex;

}
.title-lower img{
    width: 50.14px;
height: 58.865px;
margin-left:10px;
}
.avatar-container{

    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
}
.avatar-container{
    position:sticky;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:space-between;

    
}
.img-container{
    display:flex;
    justify-content:center;
    

}
.avatar-img{
    position:relative;
    scale:1.1
}
.arrow-container{
    position:absolute;
    width:100%;
height: 590px;
}

.first-arrow{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height:30px;
    position:absolute;
    left:370px;
    top:76px;
}
.first-arrow div{
    margin-left:10px;
    font-weight:600;
    font-size:1.4rem;
}
.second-arrow{
    display:flex;
    flex-direction:row-reverse;
    justify-content:center;
    align-items:center;
    height:30px;
    position:absolute;
    left:130px;
    top:230px;

}
.second-arrow div{
    margin-left:10px;
    font-weight:600;
    font-size:1.4rem;
}
.third-arrow{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height:30px;
    position:absolute;
    left:390px;
    top:280px;

}
.third-arrow div{
    margin-left:10px;
    font-weight:600;
    margin-bottom:30px;
    font-size:1.4rem;
}
.background-img{
    position:fixed;
    bottom:0;
    width:100%;
}
.snow-img{
    position:fixed;
    bottom:0;
    width:27.9vw;
    z-index:-1000;
}
.floor{
    position:fixed;
    bottom:10px;

    z-index:-1;
}
`
function AvatarSection(){
    return(
        <AvatarSectionStyle>
            <div className='avatar-container'>
                <div className = 'title-section'>
                    <div className='title-upper'>노는게 젤좋아,</div>
                    <div className='title-lower'>
                        <div>나무늘보</div>
                        <img src={animal}></img>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='avatar-img'src='/img/avatar/10131.png'/>
                    <img className='snow-img' src={background}></img>
                    <svg className='floor' xmlns="http://www.w3.org/2000/svg" width="162" height="48" viewBox="0 0 162 48" fill="none">
                    <ellipse cx="81" cy="24" rx="81" ry="24" fill="#E5EFF3"/>
                    </svg>
                    <div className='arrow-container'>
                        <div className='first-arrow'>
                            <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                                <path d="M22.8536 4.35355C23.0488 4.15829 23.0488 3.84171 22.8536 3.64645L19.6716 0.464466C19.4763 0.269204 19.1597 0.269204 18.9645 0.464466C18.7692 0.659728 18.7692 0.976311 18.9645 1.17157L21.7929 4L18.9645 6.82843C18.7692 7.02369 18.7692 7.34027 18.9645 7.53553C19.1597 7.7308 19.4763 7.7308 19.6716 7.53553L22.8536 4.35355ZM1.41161 16.7839C3.03836 14.4251 6.06534 11.3437 9.82598 8.85443C13.588 6.36423 18.0335 4.5 22.5 4.5V3.5C17.7665 3.5 13.1286 5.46911 9.27402 8.02056C5.41799 10.573 2.29498 13.7416 0.588394 16.2161L1.41161 16.7839Z" fill="black"/>
                            </svg>
                            <div>직각 승모근</div>
                        </div>
                        <div className='second-arrow'>
                            <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="49" height="13" viewBox="0 0 49 13" fill="none">
                            <path d="M0.935681 5.84894C0.677255 5.75163 0.546649 5.46324 0.643965 5.20481L2.22982 0.993514C2.32714 0.735087 2.61553 0.604482 2.87395 0.701798C3.13238 0.799114 3.26298 1.0875 3.16567 1.34593L1.75602 5.0893L5.49939 6.49896C5.75782 6.59627 5.88843 6.88466 5.79111 7.14309C5.69379 7.40151 5.40541 7.53212 5.14698 7.4348L0.935681 5.84894ZM47.5433 12.5825C45.2501 10.5786 38.865 6.53422 30.4482 4.1747C22.0413 1.81797 11.6553 1.15495 1.31816 5.83649L0.905613 4.92555C11.518 0.119349 22.1588 0.812357 30.7181 3.21182C39.2674 5.60848 45.7878 9.72044 48.2013 11.8295L47.5433 12.5825Z" fill="black"/>
                            </svg>
                            <div>얇은 허리</div>
                        </div>
                        <div className='third-arrow'>
                            <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="48" height="15" viewBox="0 0 48 15" fill="none">
                            <path d="M46.8854 0.886866C47.1615 0.879936 47.3909 1.09811 47.3978 1.37416L47.5107 5.87275C47.5177 6.1488 47.2995 6.37821 47.0234 6.38513C46.7474 6.39206 46.518 6.17389 46.511 5.89784L46.4107 1.8991L42.4119 1.99947C42.1359 2.00639 41.9065 1.78822 41.8995 1.51217C41.8926 1.23611 42.1108 1.00671 42.3868 0.999781L46.8854 0.886866ZM1.16342 12.1613C4.0416 13.1565 11.4785 14.5051 20.1651 13.5287C28.8414 12.5536 38.7154 9.2651 46.5357 1.04214L47.2603 1.73128C39.2318 10.1732 29.1104 13.5296 20.2768 14.5225C11.4535 15.5142 3.86583 14.1538 0.836619 13.1064L1.16342 12.1613Z" fill="black"/>
                            </svg>
                            <div>넓은 곡선골반</div>
                        </div>
                        
                    </div>
                    
                
                </div>

            </div>

        </AvatarSectionStyle>
    )
}
const TextSectionStyle = styled.div`
width:72vw;
text-justify: inter-word;
display:flex;
flex-direction:column;
text-align:justify;
//align-items:center;
font-family: Noto Sans KR;

.text-box{
    color:#444444;
    width:98%;
    height:90vh;
    //border: 10px dashed red;
    font-size: 1.4rem;
    line-height: 2rem;
    padding:2rem 7rem;
    box-sizing: border-box;
    font-weight:500
}
.black-font{
    color:black;
}
mark{
    background-color:rgba(243,239,163,0.5);
    
    color:black;
}
.gray-font{
    color:#d9d9d9;
}

`
const HeaderStyle = styled.div`
    border-bottom:2px solid black;
    padding:3px 50px;
    font-size: 1.5rem;
    width:100vw;
    letter-spacing: -3px;

`
const ImgBoxStyle = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    width:1290px;
    position:relative;
    //border:10px solid red;
    margin:4rem 7rem;

    .firstLine{
        z-index:1000;
        
        display:flex;
        align-items : flex-start;

    }
    .secondLine{
        z-index:-1;
        position:absolute;
        top:300px;
        display:flex;
        align-items:flex-end;
    }
    img{
        margin: 0px 4px;
    }
`


function TextSection_upper(){
    
    return(
        <TextSectionStyle>
            <HeaderStyle >
                <h1 className='header-text'>당신의 BODY 유형은,,</h1>
            </HeaderStyle>
            <Text_upper1/>
        </TextSectionStyle>
    )
}

function TextSection_lower(){
    
    return(
        <TextSectionStyle>
            <HeaderStyle>
                <h1 className='header-text'>당신의 BODY 유형은,,</h1>
            </HeaderStyle>
            <Text_lower1></Text_lower1>
        </TextSectionStyle>
    )
}

function FashionRef(){
    
    return(
        <TextSectionStyle>
            <HeaderStyle>
                <h1 className='header-text'>Fashion Ref.</h1>
            </HeaderStyle>
            <ImgBoxStyle>
                <div className='firstLine'>
                    <img src='/img/result_img/1.svg'></img>
                    <img src='/img/result_img/2.svg'></img>
                    <img src='/img/result_img/3.svg'></img>
                    <img src='/img/result_img/4.svg'></img>
                    <img src='/img/result_img/5.svg'></img>
                </div>
                <div className='secondLine'>
                    <img src='/img/result_img/6.svg'></img>
                    <img src='/img/result_img/7.svg'></img>
                    <img src='/img/result_img/8.svg'></img>
                    <img src='/img/result_img/9.svg'></img>
                    <img src='/img/result_img/10.svg'></img>
                </div>
            </ImgBoxStyle>
        </TextSectionStyle>
    )
}
const ContentBoxStyle = styled.div`
margin:4rem 7rem;
font-family: Noto Sans KR;
width:100vw;
.content-container{
    width:400px;
    margin : 2rem 0;
    margin-right:2rem;
}
.text-container{
    font-size: 1.2rem;
font-style: normal;
font-weight: 600;
    display:flex;
    flex-direction:row;
    justify-contents:space-around;
    margin: 0.7rem 0;
    
}
.type{
    margin-right:1rem;
    color:#EE808E;
}
.title{
    font-size:2rem;
    font-weight:800;
}
.box{
    display:flex;
    flex-direction:row;
    
    
}

`
function PlusContent(){
    return(
        <TextSectionStyle>
            <HeaderStyle>
                <h1 className='header-text'>Plus, 내 체형 더 알아보기</h1>
            </HeaderStyle>
            <ContentBoxStyle>
                <div className='lomo-content'>
                    <div className='title'>추천 콘텐츠 by LOMO</div>
                    <div className='box'>
                        {/* api 사용하게되면 state에 내용 저장하고 불러와서 출력하는 방식  */}
                        <div className='content-container'>
                            <img src='/img/content_img/content1.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                        <div className='content-container'>
                            <img src='/img/content_img/content2.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                        <div className='content-container'>
                            <img src='/img/content_img/content1.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                        <div className='content-container'>
                            <img src='/img/content_img/content2.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='youtube-content'>
                    <div className='title'>추천 유튜브 콘텐츠</div>
                    <div className='box'>

                        <div className='content-container'>
                            <img src='/img/content_img/youtube1.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                        <div className='content-container'>
                            <img src='/img/content_img/youtube2.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                        <div className='content-container'>
                            <img src='/img/content_img/youtube1.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                        <div className='content-container'>
                            <img src='/img/content_img/youtube2.svg'></img>
                            <div className='text-container'>
                                <div className='type'>나무늘보</div>
                                <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                            </div>
                        </div>
                    </div>

                </div>
            </ContentBoxStyle>
        </TextSectionStyle>
    )
}
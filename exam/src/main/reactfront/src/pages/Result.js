import {React,useEffect,useState} from 'react';
import styled from 'styled-components';
// import ScrollHorizontal from 'react-scroll-horizontal';
import background from './img/snowBG.svg'
import {Text_upper,Text_lower} from './text';
import { useLocation,useNavigate } from 'react-router-dom';
import bodyData from './bodyData';
import { useHorizontalScroll } from "./useSideScroll";


const ResultPageStyle=styled.div`
@media(min-width:801px){

    width:100vw;
    
    overflow: auto;
    display:flex;
    
    font-family: 'Noto Sans KR', sans-serif;
    
    
    .avatar-section{
        position:fixed;
        top:0;
        width:28vw;
        height:100vh;
        background : rgba(178,225,241,0.6);
        
    
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
    #scroll-horizontal{
        display:flex;
        flex-direction:row;
    }
}
@media(max-width:800px){

}


`

function Result() {
    const location = useLocation();    
    const state = location.state;
    
    let searchValue = Number(state.join(''));
    const [upperBody, setUpperBody] = useState('');
    const [lowerBody, setLowerBody] = useState('');
    const [refImage, setRefImg] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const foundEntry = Object.values(bodyData).find(entry => {
                    return entry.AvatarFileNumbers.includes(Number(searchValue));
                });
    
                if (foundEntry) {
                    console.log('foundEntry:', foundEntry);
                    setUpperBody(foundEntry.UpperBodyTypes);
                    setLowerBody(foundEntry.LowerBodyTypes);
                    setRefImg(foundEntry.FashionRefImage);
                } else {
                    console.log('Entry not found for search value:', searchValue);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [searchValue]);  // searchValue를 의존성으로 추가하여 searchValue가 변경될 때마다 useEffect를 실행합니다.

    console.log('upperBody:', upperBody);
    console.log('lowerBody:', lowerBody);
    console.log('arr:', refImage);

    const scrollRef = useHorizontalScroll();

    return (
        <ResultPageStyle>
            <div className='avatar-section'>
                <AvatarSection upperBody={upperBody} lowerBody={lowerBody} imgSrc={`/img/avatar/${searchValue}.svg`} />
            </div>
            <div className='text-section' id='scroll-horizontal' ref={scrollRef} style={{ overflow: "auto" }}>
                {window.innerWidth > 800 ? (
                    <>
                        {upperBody && <TextSection_upper type={upperBody} />}
                        {lowerBody && <TextSection_lower type={lowerBody} />}
                        {refImage !== undefined && <FashionRef refImage={refImage} />}
                        <PlusContent upperBody={upperBody} lowerBody={lowerBody} />
                    </>
                ) : (
                    <div>
                        {upperBody && <TextSection_upper type={upperBody} />}
                        {lowerBody && <TextSection_lower type={lowerBody} />}
                        {refImage !== undefined && <FashionRef refImage={refImage} />}
                        <PlusContent upperBody={upperBody} lowerBody={lowerBody} />
                    </div>
                )}
            </div>
        </ResultPageStyle>
    );
}

export default Result;


const AvatarSectionStyle = styled.div`
@media (min-width: 801px) {
    border-right: 2px solid black;
    box-sizing: border-box;

    .title-section {
        font-family: Noto Sans KR;
        font-weight: 700;
        font-size: 2rem;
        color: black;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Noto Sans KR;
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        line-height: 60px;
        margin-top: 10px;
    }

    .title-upper {
        /* margin-right: auto; */
    }

    .title-lower {
        /* margin-left: auto; */
        display: flex;
    }

    .title-lower img {
        /* width: 50.14px; */
        height: 58.865px;
        margin-left: 10px;
        margin-top: 6px;
    }

    .avatar-container .avatar-section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: sticky;
    }

    .img-container {
        display: flex;
        justify-content: center;
    }

    .avatar-img {
        /* position: relative; */
        scale: 1.1;
        height: 60vh; 
        //z-index:1000;
    }

    .arrow-container {
        position: absolute;
        width: 100%;
        height: 590px;
    }

    .first-arrow {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 30px;
        position: absolute;
        left: 400px;
        top: 76px;
    }

    .first-arrow div {
        margin-left: 10px;
        font-weight: 600;
        font-size: 1.4rem;
    }

    .second-arrow {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        height: 30px;
        position: absolute;
        left: 120px;
        top: 230px;
    }

    .second-arrow div {
        margin-left: 10px;
        font-weight: 600;
        font-size: 1.4rem;
    }

    .third-arrow {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 30px;
        position: absolute;
        left: 400px;
        top: 280px;
    }

    .third-arrow div {
        margin-left: 10px;
        font-weight: 600;
        margin-bottom: 30px;
        font-size: 1.4rem;
    }

    .background-img {
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .snow-img {
        position: fixed;
        bottom: 0;
        width: 27.9vw;
        z-index: -1000;
    }

    .floor {
        position: fixed;
        bottom: 10px;
        z-index: -1;
    }
}

@media (max-width: 800px) {
    font-family: Noto Sans KR;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    border-bottom: 1px solid black;

    .avatar-container {
        background-color: #CAEDF9;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        position: sticky;
        top: 0px;
        height:100vh;
    }
    .avatar-section{
        background-color:rgba(255,255,255,0.6);
        box-shadow: 10px 5px 5px #BEDFEA;
        padding:10px;
        border-radius:10px;
        margin:40px;
    }

    .snow-img {
        display: none;
    }

    .arrow-container {
        display: none;
    }

    .floor {
        display: none;
    }

    .avatar-img {

        width:60%;
    }

    .animal-img {
        width: 30px;
    }

    .img-container {
        display: flex;
        justify-content: center;
    }

    .title-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size:1.5rem;
        padding:20px;
    }

    .title-lower {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}

`
function AvatarSection({upperBody,lowerBody,imgSrc}){
    const [animalImg, setAnimalImg] = useState('');
    const [shoulder, setShoulder] = useState('직각 어깨');
    const [waist, setWaist] = useState('곡선 허리');
    const [hip, setHip] = useState('곡선 골반');
    useEffect(()=>{
        if(lowerBody === '나무늘보'){
            setAnimalImg('/img/animal/namu.svg');
        }
        else if (lowerBody === '수달'){
            setAnimalImg('/img/animal/sudal.svg');
            setHip('사선골반');
        }
        else if (lowerBody === '강아지'){
            setAnimalImg('/img/animal/dog.svg');
            setHip('직각골반')
        }
        else if (lowerBody === '고슴도치'){
            setAnimalImg('/img/animal/gosum.svg');
            setHip('직각골반');
        }
        else if (lowerBody === '사슴'){
            setAnimalImg('/img/animal/sasum.svg');
            setHip('사선골반')
        }
        else if (lowerBody === '원숭이'){
            setAnimalImg('/img/animal/wonsoong.svg');
            setHip('직선골반');

        }
        else if (lowerBody === '코알라'){
            setAnimalImg('/img/animal/koalla.svg');
            setHip('직선골반');

        }
        else if (lowerBody === '펭귄'){
            setAnimalImg('/img/animal/peng.svg');
            
        }

        if(upperBody === '노는게젤좋아'){
            setShoulder('사선 어깨')
        }
        else if (upperBody === '이구역귀요미는나'){
        }
        else if (upperBody === '알럽유쏘마치'){
            setShoulder('사선 어깨')

        }
        else if (upperBody === '심장에매력발산중'){
        }
        else if (upperBody === '상큼이공주등장'){
            setShoulder('사선 어깨');
            setWaist('통 허리');
        }
        else if (upperBody === '나만보인단말야'){
            setWaist('통 허리')
        }
        else if (upperBody === '앙큼섹시우주대스타'){
            setShoulder('사선 어깨');
            setWaist('통 허리');

        }
        else if (upperBody === '난내게반했어'){
            setWaist('통 허리')
        }
    })
    return(
        <AvatarSectionStyle>
            <div className='avatar-container'>
                <div className='avatar-section'>
                    <div className = 'title-section'>
                        <div className='title-upper'>{upperBody},</div>
                        <div className='title-lower'>
                            <div>{lowerBody}</div>
                            <img className = 'animal-img' src={animalImg}></img>
                        </div>
                    </div>
                    <div className='img-container'>
                        <img className='avatar-img'src={imgSrc}/>
                        <img className='snow-img' src={background}></img>
                        <svg className='floor' xmlns="http://www.w3.org/2000/svg" width="162" height="48" viewBox="0 0 162 48" fill="none">
                        <ellipse cx="81" cy="24" rx="81" ry="24" fill="#E5EFF3"/>
                        </svg>
                        <div className='arrow-container'>
                            <div className='first-arrow'>
                                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                                    <path d="M22.8536 4.35355C23.0488 4.15829 23.0488 3.84171 22.8536 3.64645L19.6716 0.464466C19.4763 0.269204 19.1597 0.269204 18.9645 0.464466C18.7692 0.659728 18.7692 0.976311 18.9645 1.17157L21.7929 4L18.9645 6.82843C18.7692 7.02369 18.7692 7.34027 18.9645 7.53553C19.1597 7.7308 19.4763 7.7308 19.6716 7.53553L22.8536 4.35355ZM1.41161 16.7839C3.03836 14.4251 6.06534 11.3437 9.82598 8.85443C13.588 6.36423 18.0335 4.5 22.5 4.5V3.5C17.7665 3.5 13.1286 5.46911 9.27402 8.02056C5.41799 10.573 2.29498 13.7416 0.588394 16.2161L1.41161 16.7839Z" fill="black"/>
                                </svg>
                                <div>{shoulder}</div>
                            </div>
                            <div className='second-arrow'>
                                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="49" height="13" viewBox="0 0 49 13" fill="none">
                                <path d="M0.935681 5.84894C0.677255 5.75163 0.546649 5.46324 0.643965 5.20481L2.22982 0.993514C2.32714 0.735087 2.61553 0.604482 2.87395 0.701798C3.13238 0.799114 3.26298 1.0875 3.16567 1.34593L1.75602 5.0893L5.49939 6.49896C5.75782 6.59627 5.88843 6.88466 5.79111 7.14309C5.69379 7.40151 5.40541 7.53212 5.14698 7.4348L0.935681 5.84894ZM47.5433 12.5825C45.2501 10.5786 38.865 6.53422 30.4482 4.1747C22.0413 1.81797 11.6553 1.15495 1.31816 5.83649L0.905613 4.92555C11.518 0.119349 22.1588 0.812357 30.7181 3.21182C39.2674 5.60848 45.7878 9.72044 48.2013 11.8295L47.5433 12.5825Z" fill="black"/>
                                </svg>
                                <div>{waist}</div>
                            </div>
                            <div className='third-arrow'>
                                <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="48" height="15" viewBox="0 0 48 15" fill="none">
                                <path d="M46.8854 0.886866C47.1615 0.879936 47.3909 1.09811 47.3978 1.37416L47.5107 5.87275C47.5177 6.1488 47.2995 6.37821 47.0234 6.38513C46.7474 6.39206 46.518 6.17389 46.511 5.89784L46.4107 1.8991L42.4119 1.99947C42.1359 2.00639 41.9065 1.78822 41.8995 1.51217C41.8926 1.23611 42.1108 1.00671 42.3868 0.999781L46.8854 0.886866ZM1.16342 12.1613C4.0416 13.1565 11.4785 14.5051 20.1651 13.5287C28.8414 12.5536 38.7154 9.2651 46.5357 1.04214L47.2603 1.73128C39.2318 10.1732 29.1104 13.5296 20.2768 14.5225C11.4535 15.5142 3.86583 14.1538 0.836619 13.1064L1.16342 12.1613Z" fill="black"/>
                                </svg>
                                <div>{hip}</div>
                            </div> 
                        </div>
                    </div>

                </div>

            </div>

        </AvatarSectionStyle>
    )
}
const TextSectionStyle = styled.div`
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
@media(min-width:801px){

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
        line-height: 2.4rem;
        padding:2rem 7rem;
        box-sizing: border-box;
        font-weight:500
        
    }
    
}
@media(max-width:800px){
    padding:30px;
    text-justify: inter-word;
    display:flex;
    flex-direction:column;
    text-align:justify;
    //align-items:center;
    font-family: Noto Sans KR;
    .text-box{
        color:#444444;
        font-size: 20px;
        
        box-sizing: border-box;
        font-weight:500
        
    }
}

`
const HeaderStyle = styled.div`
    background-color:#FFFDD8;
    border-bottom:2px solid black;
    padding:20px 50px;
    
    width:100vw;
    //height:70px;
    
    div{
        letter-spacing: -3px;
        font-weight:700;
        font-size: 45px;
        
    }

    @media(max-width:800px){
        display:none;
    }
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
    @media(max-width:800px){
        display:none;
    }
`


function TextSection_upper({type}){
    
    return(
        <TextSectionStyle>
            <HeaderStyle >
                <div className='header-text'>당신의 BODY 유형은,,</div>
            </HeaderStyle>
            <Text_upper type={type}/>
            {/* <Text_upper1/> */}
        </TextSectionStyle>
    )
}

function TextSection_lower({type}){

    
    
    return(
        <TextSectionStyle>
            <HeaderStyle>
            <div className='header-text'>당신의 BODY 유형은,,</div>
            </HeaderStyle>
            
            <Text_lower type={type}/>
            {/* <Text_lower1></Text_lower1> */}
        </TextSectionStyle>
    )
}

function FashionRef({refImage}){
    return(
        <TextSectionStyle>
            <HeaderStyle>
                <div className='header-text'>Fashion Ref.</div>
            </HeaderStyle>
            <ImgBoxStyle>
                <div className='firstLine'>
                    <img src={`/img/fashionRef/0${refImage[0]}.svg`}></img>
                    <img src={`/img/fashionRef/0${refImage[1]}.svg`}></img>
                    <img src={`/img/fashionRef/0${refImage[2]}.svg`}></img>
                    <img src={`/img/fashionRef/0${refImage[3]}.svg`}></img>
                    <img src={`/img/fashionRef/0${refImage[4]}.svg`}></img>
                </div>
                <div className='secondLine'>
                    <img src={`/img/fashionRef/${refImage[5]}.svg`}></img>
                    <img src={`/img/fashionRef/${refImage[6]}.svg`}></img>
                    <img src={`/img/fashionRef/${refImage[7]}.svg`}></img>
                    <img src={`/img/fashionRef/${refImage[8]}.svg`}></img>
                    <img src={`/img/fashionRef/${refImage[9]}.svg`}></img>
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
@media(max-width:800px){
    display:none;
}


`
const ContainerStyle = styled.div`
display:flex;
flex-direction:row;
align-items:center;
.return-home{
    width:156px;
    height:156px;
    cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
}
@media(max-width:800px){
    display:none;
}

`

function PlusContent({lowerBody,upperBody}){
    let navigate = useNavigate();

    return(
        <TextSectionStyle>
            <HeaderStyle>
                <div className='header-text'>Plus, 내 체형 더 알아보기</div>
            </HeaderStyle>
            <ContainerStyle>
                <ContentBoxStyle>
                    <div className='lomo-content'>
                        <div className='title'>추천 콘텐츠 by LOMO</div>
                        <div className='box'>
                            {/* api 사용하게되면 state에 내용 저장하고 불러와서 출력하는 방식  */}
                            <div className='content-container'>
                                <img src='/img/content_img/content1.svg'></img>
                                <div className='text-container'>
                                    <div className='type'>{lowerBody}</div>
                                    <div className='content-title'>체형에 잘 어울리는 악세사리 추천!</div>
                                </div>
                            </div>
                            <div className='content-container'>
                                <img src='/img/content_img/content2.svg'></img>
                                <div className='text-container'>
                                    <div className='type'>{upperBody}</div>
                                    <div className='content-title'>뮤비 속 착장 파헤치기!</div>
                                </div>
                            </div>
                            <div className='content-container'>
                                <img src='/img/content_img/content3.svg'></img>
                                <div className='text-container'>
                                    <div className='type'>{lowerBody}</div>
                                    <div className='content-title'>하체 유형과 신발의 연관성 알아보기!</div>
                                </div>
                            </div>
                            <div className='content-container'>
                                <img src='/img/content_img/content4.svg'></img>
                                <div className='text-container'>
                                    <div className='type'>{upperBody}</div>
                                    <div className='content-title'>나는 어떤 재킷을 입어야할까?</div>
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
                                    <div className='type'>{lowerBody}</div>
                                    <div className='content-title'>승모근 있다면 단발 or 긴머리?</div>
                                </div>
                            </div>
                            <div className='content-container'>
                                <img src='/img/content_img/youtube2.svg'></img>
                                <div className='text-container'>
                                    <div className='type'>{upperBody}</div>
                                    <div className='content-title'>롱 스커트 안 어울리는 유형</div>
                                </div>
                            </div>
                            <div className='content-container'>
                                <img src='/img/content_img/youtube3.svg'></img>
                                <div className='text-container'>
                                    <div className='type'>{lowerBody}</div>
                                    <div className='content-title'>베스트핏 청바지 찾기</div>
                                </div>
                            </div>
                            <div className='content-container'>
                                <img src='/img/content_img/youtube4.svg'></img>
                                <div className='text-container'>
                                    <div className='type'>{upperBody}</div>
                                    <div className='content-title'>겨울룩북-체형 완벽보완 비법 대공개</div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                    
                </ContentBoxStyle>
                <div>
                    <img className='return-home' src='/img/returnHome.svg' onClick={()=>navigate('/')}></img>
                </div>
            </ContainerStyle>
        </TextSectionStyle>
    )
}
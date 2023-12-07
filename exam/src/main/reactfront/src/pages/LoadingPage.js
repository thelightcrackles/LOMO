import React, { useEffect,useRef } from 'react';
import logo from './img/logo_2.svg';
import {useNavigate,useLocation} from 'react-router-dom'
import styled from 'styled-components';
import anime from 'animejs';

const Style = styled.div`

@media(min-width: 801px){
    .logo{
        position:absolute;
        top:25px;
        left:15px;
        cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
    }
    .content-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100vw;
        height:100vh;
    }
    .animal-container{
        display:flex;
        flex-direction:row;
        width:70vw;
        justify-content:space-around;
    }
    h1{
        font-size:3rem;
        margin-bottom:7rem;
    }
}
@media(max-width: 800px){
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;

    .logo{
        display:none;
        
    }
    .content-container{
        
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .animal-container{
        width:80vw;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    .animal-container img{
        width:30px;
    }
}
`
function LoadingPage(){
    let navigate = useNavigate();
    const location = useLocation();    
    const state = location.state;
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/avatar/result' ,{ state: state });
        },4000)
    })
    const animalRef = useRef(null);
    useEffect(() => {
        const svgElements = Array.from(animalRef.current.querySelectorAll('img')); // SVG 요소들을 선택합니다.
    
        function randomValues() {
            anime({
              targets: svgElements,
              //translateY: [-20,20],
              scale: [1,1.1,1],
              duration: 1000, // Adjust the duration according to your preference
              easing: 'linear',
              loop: true,
              direction: 'alternate-reverse',
              delay: anime.stagger(500), // Adjust the delay between each element
            });
          }
        
          randomValues();
        }, []);
    return(
        <Style>
            <img className='logo' src={logo} alt='logo image' onClick={()=>navigate('/')}/>
            <div className='content-container'>
                <h1>체형 분석중 ...</h1>
                <div className='animal-container' ref={animalRef}>
                    <img src='/img/animal/namu.svg'></img>
                    <img src='/img/animal/sudal.svg'></img>
                    <img src='/img/animal/dog.svg'></img>
                    <img src='/img/animal/gosum.svg'></img>
                    <img src='/img/animal/sasum.svg'></img>
                    <img src='/img/animal/wonsoong.svg'></img>
                    <img src='/img/animal/koalla.svg'></img>
                    <img src='/img/animal/peng.svg'></img>
                </div>

            </div>
        </Style>
    )
}
export default LoadingPage;
import React, { useEffect, useRef,useState } from 'react';
import anime from 'animejs';
import styled from 'styled-components';
import textBox4 from './img/textBox4.svg';
import textBox3 from './img/textBox3.svg';
import textBox11 from './img/textBox11.svg';
import { BrowserRouter } from 'react-router-dom';
import SignupModal from './SignupModal';
import AvatarPage from './AvatarPage';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'

const ShapedBlock = styled.div`

@media(min-width:801px){

  // height:1080px;
cursor: url('/img/cursor/defaultCursor.png') 2 2, auto;
display: flex;
justify-content: center;
align-items: center;
margin:20px 107px;
.message{
    display:none;
  }
.main-circle{
  position:absolute;
  bottom:250px;
  right:300px;
  animation: rotate 20s linear infinite;
  }
  @keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  }
  .main-circle-text{
  position:absolute;
  bottom:330px;
  right:350px;
  }

.circle-btn-container{
  cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
}
  .container{
    width:1920px;
    // height:100vh;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      position:relative;
      
  }
  .title-container{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    position:relative;
    top:10%;
    position:absolute;
    top:1%;
}
.header{
  width:100%;
  display:flex;
  align-items:center;
  justify-content: center;
}
.logo{
  font-size:x-large ;
  text-align: center;
  
}
.slogan{
font-size:x-large;
text-align: center;
font-weight:600;
line-height:0.7;
flex-grow:1;


}
.login-container{
  font-weight: 600;
  display:flex;    
  align-items:center;
  white-space:nowrap;
  position:absolute;
  right:50px;
  cursor: url('/img/loginCursor.png') 2 2, auto;

}
.join{
  padding-left:50px;
}
.background-main{
  text-align: center;
  position:absolute;
  top:90px;
  //height:1080px;
  height: auto; /* 높이를 자동으로 설정하여 비율에 맞게 축소되도록 합니다. */
  max-height: 100%;
}

.hoverEvent{
cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
}
.modal-container{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-item:center;
z-index:10000;
}

}
@media(max-width:800px){
  font-family: 'Noto Sans KR', sans-serif;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  .background-main{
    position:fixed;
    z-index:-1000;
  }
  .login-container div{
    display:none;
  }
  .slogan{
    
  display:none;
    
  }
  .container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .main-circle{
    display:none;
    }
   
  
  .circle-btn-container{
    cursor: url('/img/cursor/pointerCursor.png') 2 2, auto;
  }
  .header{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .message{
    color:red;
    font-weight:300;
  }
}


`
function MainPage() {
    const shapesRef = useRef(null);
    let navigate = useNavigate();

    
    useEffect(() => {
      const svgElements = Array.from(shapesRef.current.querySelectorAll('.el')); // SVG 요소들을 선택합니다.
  
      function randomValues() {
        anime({
          targets: svgElements,
          translateY: function() {
            return anime.random(-20, 20); // 원하는 수직 이동 범위를 설정합니다.
          },
          duration: 3000,
          easing: 'linear',
          loop:true,
          direction:'alternate',
        });
      }
  
      randomValues(); // 처음에 한 번 실행하여 요소들을 랜덤하게 배치합니다.
    }, []);
    const [startImg, setStartImg] = useState(false);
    const [memberImg, setMemberImg] = useState(false);
    const [nameImg, setNameImg] = useState(false);

    function animOpacity() {
      const textBox = Array.from(shapesRef.current.querySelectorAll('.textBox')); // SVG 요소들을 선택합니다.
      textBox.forEach((element) => {
        element.style.opacity = 0;
      });
      anime({
        targets: textBox,
        opacity: [0, 1],
        duration: 2000,
        easing: 'linear',
        direction: 'normal', // 변경된 부분
      });
    }
    useEffect(()=>{
      animOpacity();
    })

    //hover 이벤트
    const handleMouseOver=(id)=>{
      if(id==3){
        setStartImg(true);
      }else if(id==4){
        setMemberImg(true);
      }else if(id==11){
        setNameImg(true);
      }
    }
    const handleMouseOut=(id)=>{
      if(id==3){
        setStartImg(false);
      }else if(id==4){
        setMemberImg(false);
      }else if(id==11){
        setNameImg(false);
      }
    }

    let [signUpModal,setSignUpModal] = useState(false);
  return (
    <ShapedBlock>
        <div className='container'>
            <div className="title-container">
                <div className="header">
                  <div className='message'>*이 웹사이트는 pc 버전에 최적화되어있습니다.</div>
                    <div className="logo">Personal Body Type Test</div>
                    <div className='login-container'>
                      <div className="log-in">로그인</div>
                      <div className="join" onClick={()=>{
                        setSignUpModal(true);
                      }}>회원가입</div>
                    </div>
                </div>
                    <svg width="461" height="135" viewBox="0 0 461 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M84.4539 30.4446H89.9039V100.485H127.046V105.021H84.4539V30.4446Z" fill="black"/>
                        <path d="M204.78 66.7376C204.78 92.5193 186.319 106.351 166.746 106.351C145.394 106.351 129.492 90.5285 129.492 68.7309C129.492 45.2744 146.173 29.1174 167.525 29.1174C188.878 29.1174 204.78 45.2718 204.78 66.7376ZM135.164 68.5081C135.164 86.1011 147.286 101.924 166.968 101.924C186.65 101.924 199.106 86.9851 199.106 67.1808C199.106 51.0264 188.542 33.5423 167.301 33.5423C146.061 33.5423 135.164 50.14 135.164 68.5081Z" fill="black"/>
                        <path d="M288.075 69.8378C287.296 58.7718 286.296 44.3879 286.296 36.4221H286.074C283.071 44.3879 279.624 53.0198 274.843 64.3061L257.496 105.026H253.382L237.146 64.8608C232.475 53.2427 229.029 44.3904 226.582 36.4247H226.361C226.027 45.054 225.47 58.6655 224.47 70.9472L221.802 105.026H216.464L222.469 30.4497H228.698L246.713 74.9313C250.493 84.2268 253.384 91.9722 255.609 98.7222H255.831C257.832 92.4155 260.835 84.8904 265.061 75.0428L283.967 30.4522H290.417L295.755 105.029H290.417L288.083 69.8429L288.075 69.8378Z" fill="black"/>
                        <path d="M382.487 66.7376C382.487 92.5193 364.027 106.351 344.454 106.351C323.102 106.351 307.2 90.5285 307.2 68.7309C307.2 45.2744 323.881 29.1174 345.233 29.1174C366.585 29.1174 382.487 45.2718 382.487 66.7376ZM312.872 68.5081C312.872 86.1011 324.993 101.924 344.676 101.924C364.358 101.924 376.813 86.9851 376.813 67.1808C376.813 51.0264 366.249 33.5423 345.009 33.5423C323.769 33.5423 312.872 50.14 312.872 68.5081Z" fill="black"/>
                        <path d="M61.7857 26.6125C58.4917 31.9973 58.7055 38.5624 60.1947 44.4816C61.7246 50.5655 64.7767 56.1301 66.4975 62.1532C66.696 62.8522 66.8793 63.5564 67.0372 64.2656C67.1237 64.6531 67.2026 65.0457 67.2764 65.4357C67.3095 65.613 67.3401 65.7929 67.3706 65.9702C67.3935 66.112 67.4164 66.2564 67.4368 66.3982C67.4724 66.6388 67.4775 66.6844 67.4572 66.535C67.419 66.2209 67.5004 66.9276 67.4953 66.887C67.5183 67.1023 67.5386 67.3202 67.5564 67.5355C67.5844 67.8977 67.6074 68.2598 67.6175 68.622C67.643 69.3515 67.6303 70.0835 67.5844 70.8129C67.5641 71.1321 67.5361 71.4537 67.5004 71.7729C67.4852 71.9173 67.4673 72.0616 67.4495 72.206C67.5183 71.6209 67.4495 72.206 67.4317 72.3073C67.3324 72.938 67.2102 73.5636 67.0651 74.1841C66.775 75.4328 66.3982 76.6587 65.9604 77.8643C65.7593 78.4165 65.548 78.9661 65.324 79.5082C65.2909 79.5867 65.0567 80.1388 65.2731 79.6348C65.2273 79.7437 65.1789 79.8526 65.1331 79.9615C64.9905 80.2883 64.8454 80.6125 64.6978 80.9367C64.1505 82.1347 63.5625 83.3125 62.9592 84.4852C61.7729 86.7875 60.5205 89.0569 59.3496 91.3669C56.6487 96.6934 54.317 102.395 54.4876 108.469C54.5207 109.624 55.4854 110.735 56.7098 110.68C57.8859 110.627 58.9677 109.707 58.9321 108.469C58.9143 107.828 58.9194 107.184 58.9576 106.544C58.9754 106.255 58.9983 105.966 59.0263 105.68C59.0365 105.566 59.0492 105.449 59.0619 105.335C59.0747 105.221 59.0899 105.107 59.1027 104.994C59.0619 105.295 59.0594 105.32 59.095 105.069C59.2936 103.874 59.5456 102.699 59.8841 101.534C60.2431 100.305 60.6784 99.0996 61.162 97.9142C61.2053 97.8053 61.2511 97.6964 61.2969 97.5875C61.5235 97.0379 61.1086 98.0105 61.3504 97.4659C61.47 97.1949 61.5871 96.9239 61.7093 96.6554C61.9791 96.0602 62.2591 95.4701 62.5468 94.8824C64.8658 90.1283 67.5972 85.587 69.6082 80.6859C70.5602 78.3658 71.3264 75.9622 71.7133 73.4825C72.2046 70.3494 72.1232 67.272 71.5402 64.1516C70.3846 57.9639 67.363 52.3688 65.3978 46.437C64.8836 44.8869 64.4458 43.3089 64.1149 41.7082C64.0334 41.308 63.957 40.9078 63.8908 40.5051C63.8578 40.305 63.8272 40.1049 63.7967 39.9022C63.7127 39.3678 63.8196 40.1783 63.7687 39.687C63.6847 38.8866 63.6108 38.0913 63.5905 37.2858C63.5701 36.4956 63.5879 35.7053 63.6516 34.9176C63.6668 34.7226 63.6897 34.5276 63.7076 34.3325C63.7585 33.7956 63.6465 34.6314 63.733 34.1476C63.8043 33.7323 63.8781 33.3194 63.9723 32.9066C64.1479 32.1492 64.3745 31.4071 64.6596 30.6827C64.7003 30.5814 64.8811 30.1888 64.7003 30.5814C64.7971 30.3737 64.8912 30.166 64.9956 29.9609C65.1891 29.5759 65.4004 29.2036 65.6269 28.8363C66.2328 27.846 65.8789 26.3617 64.8302 25.8121C63.7483 25.2447 62.4348 25.5487 61.7908 26.6049L61.7857 26.6125Z" fill="black"/>
                        <path d="M395.223 26.0603C393.66 36.8705 393.016 47.7895 393.393 58.706C393.772 69.6453 395.129 80.5694 397.438 91.2732C398.721 97.2228 400.309 103.107 402.19 108.897C402.546 109.996 403.748 110.819 404.924 110.442C406.029 110.087 406.859 108.899 406.477 107.721C403.168 97.5217 400.77 87.0358 399.321 76.4156C399.372 76.7829 399.258 75.9318 399.25 75.866C399.209 75.562 399.171 75.2581 399.133 74.9541C399.046 74.2703 398.965 73.5864 398.889 72.9025C398.733 71.5323 398.593 70.162 398.468 68.7892C398.232 66.1602 398.051 63.5235 397.926 60.8868C397.679 55.5729 397.664 50.2489 397.886 44.9325C398.01 41.9108 398.214 38.8942 398.491 35.8827C398.629 34.3959 398.784 32.9117 398.96 31.4299C399.049 30.6701 399.143 29.9102 399.242 29.1504C399.263 28.9984 399.283 28.8465 399.303 28.6945C399.263 29.0035 399.316 28.6008 399.331 28.4868C399.39 28.0689 399.449 27.6535 399.51 27.2356C399.675 26.0958 399.227 24.8041 397.957 24.5153C396.906 24.2772 395.401 24.8345 395.223 26.0603Z" fill="black"/>
                    </svg>
                <div className="slogan">
                    <p>"내 몸을 알고, 나를 알다."</p>
                    <p>체형 분석을 통해 당신만의 특별함을 찾아보세요.</p>
                </div>
            </div>
            <div className='background-main'>
            <svg ref={shapesRef} width="1700" height="1000" viewBox="0 0 1821 991" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="body shape">
              <g className='el shapes' id="14">

              <path d="M1223.5 6.40169C1227.65 8.7956 1231.1 12.5972 1233.25 16.8807C1236.93 24.2619 1237.35 32.8119 1236.8 41.0212C1236.25 49.1721 1234.82 57.2648 1232.53 65.1146C1231.39 69.0179 1229.72 73.2354 1226.04 75.0629C1221.39 77.3702 1215.94 74.8502 1210.9 73.5554C1204.21 71.839 1196.96 72.4525 1190.63 75.1758C1188.97 75.8947 1187.03 75.0309 1186.5 73.3126C1185.75 70.8491 1185.6 68.1446 1185.48 65.5475C1184.68 48.3121 1183.88 31.0767 1183.09 13.8413C1182.96 11.0408 1182.84 8.16513 1183.75 5.50773C1184.66 2.85223 1186.84 0.426322 1189.66 0.0536847C1193.74 -0.486451 1197.08 3.2004 1201.04 4.33525C1205.1 5.50021 1209.4 3.87416 1213.63 3.765C1217.13 3.67466 1220.5 4.66836 1223.5 6.39792V6.40169Z" fill="#DAF1DD" stroke="black" stroke-width="2" mask="url(#path-1-inside-1_451_360)"/>
              </g>
              <g className='el shapes' id="13">

              <path d="M1616.85 195.901C1616.88 195.897 1616.91 195.893 1616.95 195.886C1623.81 194.921 1628.25 188.33 1631.71 182.321C1635.62 175.523 1639.53 168.356 1639.96 160.524C1640.31 154.094 1638.25 147.717 1635.14 142.075C1632.04 136.434 1627.91 131.428 1623.82 126.458C1622.13 124.41 1620.24 122.261 1618.06 120.806C1616.07 119.478 1613.39 119.822 1611.8 121.612C1604.71 129.588 1598.68 138.51 1593.93 148.071C1592 151.97 1590.25 156.082 1590.03 160.428C1589.67 167.249 1593.07 173.635 1596.38 179.612C1598.63 183.697 1600.94 187.849 1604.31 191.08C1607.65 194.286 1612.26 196.504 1616.85 195.901H1616.85Z" fill="#CDDAFD" stroke="black" stroke-width="2" mask="url(#path-2-inside-2_451_360)"/>
              </g>
              <g className='el shapes' id="12">

              <path d="M1659.99 738.667C1660.13 738.655 1660.26 738.643 1660.39 738.63C1665.57 738.147 1671.8 736.884 1673.54 731.929C1674.26 729.881 1673.99 727.627 1673.68 725.473C1670.97 706.679 1665.73 688.256 1658.16 670.873C1657.34 669.001 1656.44 667.06 1654.37 666.214C1653.48 665.848 1652.46 665.961 1651.64 666.476C1650.95 666.91 1650.45 667.605 1650.26 668.405C1646.08 686.278 1642.79 704.361 1640.39 722.567C1639.97 725.81 1639.6 729.251 1640.93 732.232C1642.44 735.592 1645.91 737.715 1649.47 738.511C1652.91 739.278 1656.48 738.992 1659.99 738.667H1659.99Z" fill="#F3EFA3" stroke="black" stroke-width="2" mask="url(#path-3-inside-3_451_360)"/>
              </g>
              <g className='el shapes hoverEvent' id="11" onMouseOver={()=>handleMouseOver(11)} onMouseOut={()=>handleMouseOut(11)}>
              <g className='el shapes' id="11_2">

              <path d="M1387.91 399.614C1385.24 400.987 1382.48 402.001 1379.52 401.726C1375.79 401.38 1372.62 399.021 1369.15 397.616C1365.68 396.211 1360.98 396.117 1358.93 399.215C1357.34 401.62 1358.1 404.793 1358.91 407.551C1362.83 420.921 1366.74 434.291 1370.66 447.661C1371.88 451.822 1373.13 456.048 1375.49 459.698C1377.77 463.223 1381.27 466.199 1385.41 466.954C1385.8 467.025 1386.2 467.015 1386.58 466.919C1393.64 465.144 1399.86 460.366 1404 454.378C1408.82 447.411 1411.07 438.953 1411.75 430.536C1412.42 422.12 1411.62 413.663 1410.82 405.258C1410.5 401.905 1410.02 398.225 1407.51 395.95C1403.8 392.586 1397.81 394.105 1393.41 396.523C1391.6 397.518 1389.78 398.651 1387.91 399.61L1387.91 399.614Z" fill="#B2E1F1" stroke="black" stroke-width="2" mask="url(#path-4-inside-4_451_360)"/>
              {nameImg&&<image className='textBox' x="1050" y="440" width="320" height="320" xlinkHref={textBox11} />}
              </g>
              </g>
              <g className='el shapes' id="10">

              <path d="M1373.82 850.534C1373.25 861.269 1375.41 872.159 1380.27 881.762C1381.91 885.005 1383.91 888.558 1382.91 892.051C1382.16 894.659 1379.83 896.582 1377.28 897.539C1374.74 898.5 1371.96 898.646 1369.24 898.784C1361.82 899.16 1354.4 899.534 1346.98 899.91C1342.89 900.118 1338.37 900.186 1335.24 897.548C1332.23 895.007 1331.47 890.548 1332.34 886.715C1333.21 882.881 1335.43 879.511 1337.61 876.235C1342.9 868.297 1346.09 861.341 1351.06 853.551C1351.83 852.342 1351.83 850.796 1351.06 849.591C1345.48 840.923 1340.34 831.974 1335.67 822.789C1334.12 819.737 1332.59 816.563 1332.34 813.152C1332.1 809.741 1333.42 805.999 1336.4 804.304C1338.47 803.13 1340.97 803.093 1343.35 803.084C1351.72 803.055 1360.1 803.029 1368.48 803.001C1372.96 802.985 1377.94 803.167 1381.12 806.309C1383.97 809.122 1384.48 813.611 1383.62 817.51C1382.76 821.409 1380.74 824.939 1379.1 828.58C1375.98 835.486 1374.22 842.972 1373.82 850.531L1373.82 850.534Z" fill="#DAF1DD" stroke="black" stroke-width="2" mask="url(#path-5-inside-5_451_360)"/>
              </g>
              <g className='el shapes' id="9">

              <path d="M1080.04 247.002C1078.97 247.43 1073.27 246.374 1067.32 248.474C1061.54 250.762 1055.5 256.208 1057.6 273.935C1059.5 286.22 1050.15 291.919 1050.01 300.1C1049.89 303.929 1050.62 314.269 1055.12 322.005C1057.3 325.842 1060.24 328.893 1063.9 330.443C1067.58 332.066 1071.99 332.192 1077.4 331.837C1087.2 330.823 1095.87 333.497 1103.21 329.87C1110.32 326.677 1116.1 317.183 1114.82 301.849C1114.41 297.062 1112.76 292.508 1110.21 288.689C1108.21 285.623 1105.95 280.929 1106.58 273.834C1107.14 267.769 1107.9 258.744 1104.43 252.923C1102.74 250.058 1100.1 248.165 1096.17 247.502C1092.24 246.747 1087.03 247.22 1080.04 247L1080.04 247.002Z" fill="#FED7D8" stroke="black" stroke-width="2" mask="url(#path-6-inside-6_451_360)"/>
              </g>
              <g className='el shapes' id="8">

              <path d="M991.618 656.039C986.544 655.769 981.564 656.875 977.828 660.341C973.659 664.207 971.93 670.329 972.002 676.158C972.075 681.986 973.732 687.651 975.372 693.222C980.19 709.567 985.006 725.91 989.825 742.256C990.074 743.099 990.327 743.95 990.626 744.78C992.151 748.997 996.664 751.091 1000.67 749.43C1001.41 749.12 1001.88 748.34 1001.81 747.506C1000.51 730.851 1004.12 713.801 1012.05 699.292C1015.71 692.582 1020.45 685.747 1019.97 678.033C1019.33 667.93 1009.92 660.883 1000.69 657.829C997.802 656.873 994.692 656.204 991.616 656.041L991.618 656.039Z" fill="#CDDAFD" stroke="black" stroke-width="2" mask="url(#path-7-inside-7_451_360)"/>
              </g>
              <g className='el shapes' id="7">

              <path d="M39.9324 836.874C38.5247 828.731 37.1171 820.586 35.7095 812.443C34.8645 807.55 33.9819 802.552 31.5494 798.216C29.1169 793.88 24.7978 790.255 19.8032 790.013C14.1372 789.737 8.91036 794.042 7.00914 799.345C5.10791 804.649 6.07212 810.631 8.41048 815.76C10.0649 819.388 12.3552 822.672 14.8169 825.831C17.1344 828.804 18.3036 832.501 18.0839 836.254C17.6405 843.849 17.1992 851.442 16.7558 859.037C16.5006 863.406 16.2915 868.01 18.268 871.923C20.5813 876.506 25.8834 879.368 31.0328 878.962C36.1822 878.555 40.9028 874.987 42.8166 870.227C44.7743 865.357 43.9105 859.875 43.0174 854.707C41.9904 848.762 40.9614 842.819 39.9344 836.874H39.9324Z" fill="#CDDAFD" stroke="black" stroke-width="2" mask="url(#path-8-inside-8_451_360)"/>
              </g>
              <g className='el shapes' id="6">

              <path d="M573.695 835.479C572.462 835.721 567.967 836.133 561.953 838.382C556.089 841.007 548.708 845.467 545.107 862.521C541.794 879.957 546.453 893.517 551.99 900.181C557.773 907.271 564.433 907.464 570.791 908C577.125 907.55 584.458 907.794 590.998 902.017C597.316 896.653 602.845 885.267 600.415 871.109C598.194 857.824 594.79 847.236 590.547 841.407C586.232 835.402 581.075 834.156 573.697 835.479H573.695Z" fill="#DAF1DD" stroke="black" stroke-width="2" mask="url(#path-9-inside-9_451_360)"/>
              </g>
              <g className='el shapes' id="5">

              <path d="M525.312 643.595C524.307 643.573 523.331 643.426 522.405 643.137C517.196 641.511 514.27 635.604 513.929 629.076C513.588 622.547 515.476 615.474 517.925 608.729C521.08 600.043 525.368 591.341 531.597 584.647C535.726 580.21 540.831 576.796 545.819 575.45C546.502 575.267 547.155 574.992 547.781 574.663C551.463 572.731 555.027 574.952 557.126 577.917C561.726 584.415 562.504 594.421 560.104 604.092C557.704 613.763 552.364 623.059 545.848 630.788C542.54 634.713 538.852 638.332 534.765 640.751C531.69 642.57 528.361 643.662 525.31 643.596L525.312 643.595Z" fill="#F3EFA3" stroke="black" stroke-width="2" mask="url(#path-10-inside-10_451_360)"/>
              </g>
              <g className='el shapes hoverEvent' id="4" onMouseOver={()=>handleMouseOver(4)} onMouseOut={()=>handleMouseOut(4)}>

              <path  d="M217.925 533.582C217.871 532.413 217.826 531.245 217.783 530.077C217.576 524.589 217.369 519.099 217.162 513.611C216.97 508.482 216.779 503.306 217.661 498.252C218.543 493.198 220.594 488.204 224.282 484.67C227.626 481.466 232.306 479.632 236.897 480.062C241.488 480.493 245.869 483.298 247.92 487.464C250.215 492.123 249.481 497.631 249.079 502.818C248.676 508.004 247.729 514.195 251.291 517.958L251.853 518.55C258.42 524.643 262.903 533.257 262.999 542.25C263.096 551.447 258.146 560.805 249.967 564.866C244.135 567.761 236.891 567.764 231.227 564.546C225.641 561.374 221.986 555.471 220.134 549.278C218.617 544.203 218.17 538.891 217.924 533.58L217.925 533.582Z" fill="#FED7D8" stroke="black" stroke-width="2" mask="url(#path-11-inside-11_451_360)"/>
              {memberImg&& <image className='textBox' x="280" y="510.582" width="320" height="320" xlinkHref={textBox4} />}

              </g>
              <g className='el shapes hoverEvent' id="3" onMouseOver={()=>handleMouseOver(3)} onMouseOut={()=>handleMouseOut(3)}>
              <g id="3_2">

              <path d="M683.086 347.316C684.282 347.73 685.45 348.215 686.587 348.769C690.397 350.63 694.801 353.298 698.528 351.278C700.585 350.162 701.718 347.823 701.946 345.518C702.175 343.214 701.636 340.911 701.076 338.662C696.013 318.38 688.82 298.615 679.647 279.786C678.959 278.372 677.804 276.791 676.478 276.182C675.503 275.733 674.337 276.146 673.825 277.081C664.573 293.965 657.298 312.025 653.653 330.875C653.139 333.53 652.742 336.263 653.204 338.927C653.665 341.591 655.11 344.21 657.514 345.512C660.823 347.304 664.879 346.233 668.626 345.772C673.481 345.175 678.473 345.719 683.088 347.316H683.086Z" fill="#B2E1F1" stroke="black" stroke-width="2" mask="url(#path-12-inside-12_451_360)"
              onClick={()=>{navigate('/avatar/0')}}/>
              {startImg && <image className='textBox' x="683.086" y="347.316" width="320" height="320" xlinkHref={textBox3} />}

              </g>
              </g>
              <g className='el shapes' id="2">

              <path d="M399.892 65.832C397.579 67.4346 395.61 69.5256 394.438 72.0968C392.587 76.1605 392.918 80.8643 393.289 85.3311C394.611 101.305 395.933 117.279 397.256 133.253C397.419 135.211 397.75 137.462 399.394 138.478C400.714 139.295 402.397 138.99 403.907 138.657C409.632 137.397 415.106 136.292 420.724 135.099C423.708 134.465 426.148 132.276 427.149 129.333C433.582 110.432 434.76 89.6795 430.438 70.1555C429.753 67.0584 428.792 63.7659 426.337 61.8183C423.063 59.2221 418.414 59.9268 414.352 60.7624C410.478 61.5585 406.564 62.367 402.975 64.0569C401.909 64.5599 400.869 65.1502 399.89 65.8279L399.892 65.832Z" fill="#CDDAFD" stroke="black" stroke-width="2" mask="url(#path-13-inside-13_451_360)"/>
              </g>
              <g className='el shapes' id="1">

              <path d="M23.9931 294.435C22.6322 292.78 21.0283 291.31 18.9561 291.043C15.4899 290.598 12.6908 293.673 10.57 296.447C5.74734 302.753 0.73689 309.534 0.076341 317.439C-0.303641 321.974 0.800958 326.486 1.92765 330.895C5.36736 344.356 8.10676 356.653 12.0568 369.879C12.5671 371.584 14.4869 372.496 16.0908 371.721C16.1549 371.69 16.2167 371.657 16.2786 371.624C17.4517 370.969 18.2646 369.835 19.0379 368.738C25.0756 360.175 31.1133 351.614 37.1488 343.05C40.6239 338.123 44.2514 332.702 43.9863 326.68C43.7477 321.259 40.3875 316.539 37.1599 312.175C33.1458 306.747 29.1317 301.319 25.1176 295.891C24.7597 295.406 24.3863 294.914 23.9931 294.435Z" fill="#DAF1DD" stroke="black" stroke-width="2" mask="url(#path-14-inside-14_451_360)"/>
              </g>
              </g>
              </svg>

            </div>
            <div className='circle-btn-container' onClick={()=>{navigate('/avatar/0')}}>
              <img className='main-circle' src='/img/mainCircle.svg'></img>
              <img className='main-circle-text' src='/img/mainCircleText.svg'></img>
                      
            </div>
        <div className='modal-container'>
        { signUpModal==true ? <SignupModal isSignUpModal={setSignUpModal} />:null} 
        </div>
      </div>
    </ShapedBlock>
  );
}

export default MainPage;

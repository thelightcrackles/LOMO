import React, { useEffect } from 'react';
import anime from 'animejs';
import Shapes from './pages/MainPage';
import styled from 'styled-components';
import AvatarPage from './pages/AvatarPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AvatarPage_2 from './pages/AvatarPage_2'
import Result from './pages/Result';
import MainPage from './pages/MainPage';
import LoadingPage from './pages/LoadingPage';
const GlobalStyle = styled.div`
cursor: url('/img/cursor/defaultCursor.png') 2 2, auto;
overflow:hidden;
`
  function App() {
    return (
      <GlobalStyle className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="avatar/0" element={<AvatarPage />}/>
            <Route path="avatar/*" element={<AvatarPage_2 />} />
            <Route path="avatar/loading" element={<LoadingPage />} />
            <Route path="avatar/result" element={<Result/>} />
          
          </Routes>
        </header>
      </GlobalStyle>
    );
  }
  

export default App;

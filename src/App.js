import React, { useEffect } from 'react';
import anime from 'animejs';
import Shapes from './pages/Shapes';
import styled from 'styled-components';
import AvatarPage from './pages/AvatarPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AvatarPage_2 from './pages/AvatarPage_2'
import Result from './pages/Result';

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Shapes />} />
            <Route path="avatar/0" element={<AvatarPage />}/>
            <Route path="avatar/*" element={<AvatarPage_2 />} />
            <Route path="avatar/result" element={<Result/>} />
          
          </Routes>
        </header>
      </div>
    );
  }
  

export default App;

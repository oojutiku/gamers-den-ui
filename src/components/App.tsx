import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Den from './Den';
import GameResults from './GameResults';
import Home from './Home';
import Layout from './Layout';
import Login from './Login';
import Register from './Register';
import UnknownPage from './UnknownPage';

function App() {

  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='games' element={<GameResults />} />
          <Route path='den' element={<Den />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<UnknownPage />} />
        </Route>
      </Routes>
      {
        background && (
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Routes>
        )
      }
    </>
  );
}

export default App;

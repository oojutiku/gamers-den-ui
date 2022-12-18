import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import GameResults from './GameResults';
import Home from './Home';
import Layout from './Layout';
import UnknownPage from './UnknownPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='games' element={<GameResults />} />
          <Route path='*' element={<UnknownPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

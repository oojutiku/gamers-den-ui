import React, { FC, useState } from 'react';
import logo from '../assets/Gamers_Den_Logo.png'
import Login from './Login';
import Register from './Register';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {

  let [showLogin, setShowLogin] = useState(false);
  let [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className='container m-auto bg-gray-50/70 dark:bg-slate-900/70 fixed z-10 backdrop-blur'>
        <nav className="relative px-4 py-4 flex justify-between items-center">
          <a className="text-3xl font-bold leading-none" href="/">
            <img className='h-10' src={logo} alt='Gamers Den Logo'></img>
          </a>
          <button className="ml-auto mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" onClick={() => setShowLogin(true)}>Sign In</button>
            <button className="py-2 px-6 bg-red-900 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" onClick={() => setShowLogin(true)}>Sign up</button>
        </nav>
        </header>
      <Login show={showLogin}></Login>
      {/* <Register show={showRegister}></Register> */}
    </>
  )
};

export default Header;

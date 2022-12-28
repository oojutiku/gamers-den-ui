import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Gamers_Den_Logo.png'
import Login from './Login';
import Register from './Register';

interface HeaderProps {
  match?: any
 }

const Header: FC<HeaderProps> = (props: HeaderProps) => {

  const location = useLocation();
  return (
    <>
      <header className='bg-gray-50/70 dark:bg-slate-900/70 fixed z-10 backdrop-blur w-screen'>
        <nav className="container mx-auto relative px-4 py-4 flex justify-between items-center">
          <a className="text-3xl font-bold leading-none" href="/">
            <img className='h-10' src={logo} alt='Gamers Den Logo'></img>
          </a>
          <div>
            <button className="mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
              <Link to='/login' state={{background: location}} >Sign In</Link>
            </button>
            <button className="mr-3 py-2 px-6 bg-red-900 hover:bg-red-700 text-sm text-white font-bold rounded-xl transition duration-200">
              <Link to='/register' state={{ background: location }} >Sign up</Link>
            </button>
          </div>
        </nav>
        </header>
    </>
  )
};

export default Header;


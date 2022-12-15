import React, { FC } from 'react';
import logo from '../assets/Gamers_Den_Logo.png'

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <header>
      <nav className="relative px-4 py-4 flex justify-between items-center">
        <a className="text-3xl font-bold leading-none" href="#">
          <img className='h-10' src={logo} alt='Gamers Den Logo'></img>
        </a>
        <a className="ml-auto mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
      <a className="py-2 px-6 bg-red-900 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
      </nav>
    </header>
);

export default Header;

import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
  <div className='bg-gray-50 dark:bg-slate-900 dark:text-white'>
    <Header />

    <main className='container m-auto pt-20'>
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default Layout;

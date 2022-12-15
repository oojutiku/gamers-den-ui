import React, { FC } from 'react';


interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className="text-center lg:text-left">
    <div className="text-gray-700 dark:text-white text-center p-4">
      © 2023 Copyright:
      <a className="text-gray-800 dark:text-white" href="https://oyinkanojutiku.com/">Oyinkan Ojutiku</a>
    </div>
  </footer>
);

export default Footer;

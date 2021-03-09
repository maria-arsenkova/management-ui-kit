import React from 'react';
import './index.css';
import logoWeb from './img/logoWeb.png';
import circle from './img/circle.png';

function HeaderLogo() {
  return (
    <div className='header__logo'>
      <a href='/' className='header__logo-item'>
        <img src={logoWeb} alt='logo' />
        <span className='header__logo-name'>Website</span>
      </a>
      <span className='header__logo-icon'>
        <img src={circle} alt='circle' />
      </span>
    </div>
  );
}

export default HeaderLogo;

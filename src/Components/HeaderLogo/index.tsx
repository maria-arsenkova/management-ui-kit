import React from 'react';
import './style.css';
import logoWeb from './img/logoWeb.svg';
import circle from './img/circle.svg';

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

export { HeaderLogo };

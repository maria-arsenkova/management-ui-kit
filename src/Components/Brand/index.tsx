import React from 'react';
import './style.css';
import list from './img/list.svg';
import search from './img/search.svg';

function Brand() {
  return (
    <div className='brand'>
      <a href='/'>
        <img src={list} alt='list' className='brand__iconList'></img>
      </a>
      <span className='brand__name'>PROJECTUS</span>
      <a href='/' className='brand__iconSearch'>
        <img src={search} alt='search'></img>
      </a>
    </div>
  );
}

export { Brand };

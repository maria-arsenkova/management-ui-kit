import React from 'react';
import './index.css';
import list from './img/list.png';
import search from './img/search.png';

function Brand() {
  return (
    <div className="brand">
      <a href="/">
        <img src={list} alt="list" className="brand__iconList"></img>
      </a>
      <span className="brand__name">PROJECTUS</span>
      <a href="/" className="brand__iconSearch">
        <img src={search} alt="search"></img>
      </a>
    </div>
  );
}

export default Brand;

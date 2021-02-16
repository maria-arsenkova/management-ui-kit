import React from 'react'
import './style.css';
import logo from './img/logo.png';
import search from './img/search.png';


function Brand(){
    return( 
    <div  className="brand">
        <a href="/">
          <img src={logo} alt="logo" className="brand-icon"></img>
        </a>
        <span className="brand-name">PROJECTUS</span>
        <a href="/" className="brand-search">
          <img src={search} alt="search"></img>
        </a>
    </div>
    );  
  }

export default Brand;
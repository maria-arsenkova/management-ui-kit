import React from 'react'
import './Logo.css';
import logo from './logoTwo.svg';


function Logo(){
    return( 
    <div  className="Logo">
      <img className="LogoImg" src={logo}/>
      <div className="CompanyName">PROJECTUS</div>
    </div>
    );  
  }

export default Logo;

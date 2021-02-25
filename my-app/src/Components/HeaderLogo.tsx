import React from 'react'
import '../style.css';
import logoWeb from '../img/logoWeb.png'

function HeaderLogo() {
    return (  
        <div className="header-logo">
                <a href="/">
                <img src={logoWeb} alt="Logo"/>
                <span className="header-name">Website</span>
                </a>
                <span className="icon"></span>
        </div>
    )
}

export default HeaderLogo;
import React from 'react'
import './index.css';
import logoWeb from './img/logoWeb.png'
import circle from './img/circle.png'

function HeaderLogo() {
    return (  
        <div className="header-logo">
                <a href="/">
                <img src={logoWeb} alt="Logo"/>
                <span className="header-name">Website</span>
                </a>
                <span className="icon">
                    <img src={circle} alt="Сircle"/>
                </span>
        </div>
    )
}

export default HeaderLogo;
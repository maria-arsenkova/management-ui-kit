import React from 'react'
import '../style.css';
import userpic from '../img/userpic.png';

function UserInfo(){
    return( 
        <div className="userInfo">
            <a href="/" className="userInfo-photo">
                <img src={userpic} alt="userpic"></img>
            </a>
            <div>
                <span className="userInfo-initials">Emilee Simchenko</span>
                <span className="userInfo-position">Product Owner</span>
            </div>
        </div>
    );  
  }

export default UserInfo;
import React from 'react'
import '../style.css';

function UserInfo({user}: any){

    return(
        <div className="userInfo">
            <a href="/" className="userInfo-photo">
                <img 
                src={user.avatar}
                alt={user.initials}
                />
            </a>
            <div>
                <div className="userInfo-initials">
                    {user.initials}
                    </div>
                <div className="userInfo-position">
                    {user.position}
                    </div>
            </div>
        </div>
    );  
  }

export default UserInfo;

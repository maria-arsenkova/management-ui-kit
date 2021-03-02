import React from 'react'
import './index.css';
import circle from './img/circle.png'

export type UserType = {
    avatar: string
    initials: string
    position?: string
}

interface UserInfoProps {
    user: UserType
}

function UserInfo({user}: UserInfoProps){
    return(
        <div className="userInfo">
            <a href="/" className="userInfo-photo">
                <img 
                key={`${user.initials}_${user.avatar}`}
                src={user.avatar}
                alt={user.initials}
                />
            </a>
            <div>
                <div className="userInfo-initials">
                    {user.initials}
                </div>
                {user?.position && (
                    <div className="userInfo-position">
                        {user.position}
                    </div>
                )}
            </div>
            <a href="/" className="circle">
            <img
                src={circle}
                alt= "circle"
                />
            </a>
        </div>
    );  
  }

export default UserInfo;

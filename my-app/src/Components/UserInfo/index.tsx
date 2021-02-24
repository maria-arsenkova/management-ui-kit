import React from 'react'
import 'src/style.css';

export type UserType = {
    avatar: string
    initials: string
    position: string
}

interface UserInfoProps {
    user: UserType
}

function UserInfo({user}: UserInfoProps){

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

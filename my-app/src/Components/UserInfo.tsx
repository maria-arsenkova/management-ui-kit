import React from 'react'
import '../style.css';

function UserInfo(props: any){
    return( 
        <div className="userInfo">
            <a href="/" className="userInfo-photo">
                <img 
                src={props.user.avatar}
                alt={props.user.initials}
                />
            </a>
            <div>
                <div className="userInfo-initials">
                    {props.user.initials}
                    </div>
                <div className="userInfo-position">
                    {props.user.position}
                    </div>
            </div>
        </div>
    );  
  }

export default UserInfo;
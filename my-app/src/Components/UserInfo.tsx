import React from 'react'
import '../style.css';


function UserInfo(props: any){
    return( 
        <div className="userInfo">
            <a href="/" className="userInfo-photo">
                <img 
                src={props.avatar}
                alt={props.initials}
                />
            </a>
            <div>
                <div className="userInfo-initials">
                    {props.initials}
                    </div>
                <div className="userInfo-position">
                    {props.position}
                    </div>
            </div>
        </div>
    );  
  }

export default UserInfo;
import React from 'react'
import '../style.css';
import chat from '../img/chat.png'

function Members(props: any) {
    return (  
        <div className="members">
                <div className="users">
                    <a href="/">
                     <img
                      src= {props.members[0].avatar}
                      alt={props.members[0].name}
                     />
                    </a>
                    <a>
                    <img
                      src= {props.members[1].avatar}
                      alt={props.members[1].name}
                     />
                    </a>
                    <a>
                    <img
                      src= {props.members[2].avatar}
                      alt={props.members[2].name}
                     />
                    </a>
                </div>
                <div className="members-share">
                     <span className="members-name">Share</span>
                </div>
                <div className="members-сhat">
                    <a href="/">
                    <img src={chat} alt="chat"/>
                    </a>
                    <span className="members-name">Chat</span>
                </div>
        </div>
    )
}

export default Members;
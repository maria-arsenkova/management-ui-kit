import React from 'react'
import './index.css';
import chat from './img/chat.png'

export type MembersType = {
    name: string
    avatar: string
}


interface MembersProms {
    members: MembersType []
}

function Members({members}: MembersProms) {
    return (  
        <div className="members">
                <div className="users">
                    {members.map((member) => {
                       return (
                           member?.avatar  && (
                            <a href="/">
                                <img
                                key={`${member.avatar}_${member.name}`}
                                src= {member.avatar}
                                alt={member.name}
                                />
                            </a>
                           )
                       )
                    })}
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
import React from 'react'
import '../style.css';
import HeaderLogo from './HeaderLogo'
import Members from './Members'
import userN from '../img/userN.png'
import userTen from '../img/userTen.png'
import userEl from '../img/userEl.png'

const members = [
    {name: 'userN', avatar: userN},
    {name: 'userTen', avatar: userTen},
    {name: 'userEl', avatar: userEl}
]

function HeaderTitle() {
    return (  
        <div className="header-title">
                <HeaderLogo />
                <Members 
                    members={members}
                />
        </div>
    )
}

export default HeaderTitle;
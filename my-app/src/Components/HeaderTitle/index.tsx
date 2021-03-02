import React from 'react'
import './index.css';
import HeaderLogo from '../HeaderLogo'

import Members, {MembersType} from '../Members'
import userN from '../Members/img/userN.png'
import userTen from '../Members/img/userTen.png'
import userEl from '../Members/img/userEl.png'

const members: MembersType [] = [
    {name: 'userN', avatar: userN},
    {name: 'userTen', avatar: userTen},
    {name: 'userEl', avatar: userEl}
]

function HeaderTitle() {
    return (  
        <div className="header-title">
                <HeaderLogo />
                <Members members={members} />
        </div>
    )
}

export default HeaderTitle;
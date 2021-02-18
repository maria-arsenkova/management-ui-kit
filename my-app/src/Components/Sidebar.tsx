import React from 'react'
import '../style.css';
import Brand from './Brand';
import UserInfo from './UserInfo';
import userpic from '../img/userpic.png';

const user = {
  avatar: userpic,
  initials: 'Emilee Simchenko',
  position: 'Product Owner'
}
    function Sidebar () {
        return (
        <div className="sidebar">
          <Brand />
          <UserInfo
            avatar={user.avatar}
            initials={user.initials}
            position={user.position}
           />
        </div>
        )
    }
export default Sidebar;
import React from 'react'
import '../style.css';
import Brand from './Brand';
import UserInfo from './UserInfo';

    function Sidebar () {
        return (
        <div className="sidebar">
          <Brand />
          <UserInfo />
        </div>  
        )
    }
export default Sidebar;
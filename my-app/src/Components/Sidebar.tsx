import React from 'react'
import '../style.css';
import Brand from './Brand';
import UserInfo from './UserInfo';
import Stats from './Stats';
import Userpic from '../img/userpic.png';

const user = {
  avatar: Userpic,
  initials: 'Emilee Simchenko',
  position: 'Product Owner'
}

const tasks = {
  completed: {
    name: 'Completed Tasks',
    counter: '372'
  },
  open: {
    name: 'Open Tasks',
    counter: '11'
  },
}
    function Sidebar () {
        return (
        <div className="sidebar">
          <Brand />
          <UserInfo
            user={user}
           />
          <Stats 
            completed={tasks.completed}
            open={tasks.open}
          />
        </div>
        )
    }
export default Sidebar;
import React from 'react'
import '../style.css';
import Brand from './Brand';
import UserInfo from './UserInfo';
import userpic from '../img/userpic.png';
import Stats from './Stats';
import MenuList from './MenuList';
import ProjectsList from './ProjectsList';
import SidebarFooter from './Sidebar'


const user = {
  avatar: userpic,
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

const counter = {
  amount: '3'
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
          <MenuList 
           amount={counter.amount}
          />
          <ProjectsList />
          < SidebarFooter/>
        </div>
        )
    }
export default Sidebar;
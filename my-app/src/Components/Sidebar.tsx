import React from 'react'
import '../style.css';
import Brand from './Brand';

import UserInfo, {UserType} from './UserInfo';
import userpic from '../img/userpic.png';

import Stats from './Stats';
import MenuList from './MenuList';
import ProjectsList from './ProjectsList';
import SidebarFooter from './SidebarFooter'

import TeamsList from './TeamsList'
import userZ from '../img/userZ.png'
import userO from '../img/userO.png'
import userT from '../img/userT.png'
import userF from '../img/userF.png'
import userFo from '../img/userFo.png'
import userFa from '../img/userFa.png'
import userSi from '../img/userSi.png'
import userSe from '../img/userSe.png'
import userEt from '../img/userEt.png'

const user: UserType = {
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

const teams = {
  designers: [
    {name: 'userZ', avatar: userZ},
    {name: 'userO', avatar: userO},
    {name: 'userT', avatar: userT}
  ],
  backend: [
    {name: 'userF', avatar: userF},
    {name: 'userFo', avatar: userFo}
  ],
  frontend: [
    {name: 'userFa', avatar: userFa},
    {name: 'userSi', avatar: userSi},
    {name: 'userSe', avatar: userSe},
    {name: 'userEt', avatar: userEt}
  ]
}

function Sidebar () {
        return (
        <div className="sidebar">
          <Brand />
          <UserInfo user={user}/>
          <Stats 
            completed={tasks.completed}
            open={tasks.open}
          />
          <MenuList 
            amount={counter.amount}
          />
          <ProjectsList />
          <TeamsList 
            teams={teams}
          />
          <SidebarFooter/>
        </div>
        )
}

export default Sidebar;

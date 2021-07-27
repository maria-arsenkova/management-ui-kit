import React from 'react';
import './style.css';
import { UserType } from '../UserInfo/types';
import { Brand } from '../Brand';
import { UserInfo } from '../UserInfo';
import userpic from '../UserInfo/img/userpic.png';
import { Stats, StatsType } from '../Stats';
import { SidebarMenu, ContentType } from '../SidebarMenu';
import dashboard from '../SidebarMenu/img/dashboard.svg';
import crm from '../SidebarMenu/img/crm.svg';
import website from '../SidebarMenu/img/website.svg';
import communication from '../SidebarMenu/img/communication.svg';
import userZ from '../SidebarMenu/img/userZ.png';
import userO from '../SidebarMenu/img/userO.png';
import userT from '../SidebarMenu/img/userT.png';
import userF from '../SidebarMenu/img/userF.png';
import userFo from '../SidebarMenu/img/userFo.png';
import userFa from '../SidebarMenu/img/userFa.png';
import userSi from '../SidebarMenu/img/userSi.png';
import userSe from '../SidebarMenu/img/userSe.png';
import userEt from '../SidebarMenu/img/userEt.png';
import { SidebarFooter } from '../SidebarFooter';

export const user: UserType = {
  avatar: userpic,
  initials: 'Emilee Simchenko',
  position: 'Product Owner',
};

const tasks: StatsType[] = [
  { name: 'Completed Tasks', counter: 372 },
  { name: 'Open Tasks', counter: 11 },
];

const menu: ContentType[] = [
  { name: 'Home' },
  { name: 'My Tasks' },
  { name: 'Notifications', counter: 3 },
];

const projects: ContentType[] = [
  {
    name: 'Dashboard UI Kit',
    preview: dashboard,
  },
  {
    name: 'CRM System',
    preview: crm,
  },
  {
    name: 'Website Redesign',
    preview: website,
  },
  {
    name: 'Communication Tool',
    preview: communication,
  },
];

const teams: ContentType[] = [
  {
    name: 'Designers',
    items: [
      { name: 'userZ', avatar: userZ },
      { name: 'userO', avatar: userO },
      { name: 'userT', avatar: userT },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'userF', avatar: userF },
      { name: 'userFo', avatar: userFo },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'userFa', avatar: userFa },
      { name: 'userSi', avatar: userSi },
      { name: 'userSe', avatar: userSe },
      { name: 'userEt', avatar: userEt },
    ],
  },
];

function Sidebar() {
  return (
    <div className='sidebar'>
      <Brand />
      <UserInfo user={user} />
      <Stats tasks={tasks} />
      <SidebarMenu titel={'menu'} content={menu} />
      <SidebarMenu titel={'projects'} content={projects} />
      <button className='sidebar__button'>+ Add a Project</button>
      <SidebarMenu titel={'teams'} content={teams} />
      <button className='sidebar__button'>+ Add a Team</button>
      <SidebarFooter />
    </div>
  );
}

export { Sidebar };

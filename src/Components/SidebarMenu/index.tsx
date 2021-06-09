import React from 'react';
import './style.css';

type ContentItemType = {
  name: string;
  avatar: string;
};

export type ContentType = {
  name: string;
  items?: ContentItemType[];
  counter?: number;
  preview?: string;
};

interface SidebarMenuProps {
  titel: string;
  content: ContentType[];
}

function SidebarMenu({ content, titel }: SidebarMenuProps) {
  return (
    <div className='sidebar__menu'>
      <ul>
        <li className='sidebar__menu-item'>
          <p className='sidebar__menu-title'>{titel}</p>
        </li>
        {content.map((team) => {
          return (
            <li className='sidebar__menu-item' key={`${team.name}`}>
              <a href='/' className='sidebar__menu-link'>
                {team?.preview && (
                  <img
                    className='sidebar__menu-preview'
                    key={`${team.preview}_${team.name}`}
                    src={team.preview}
                    alt={team.name}
                  />
                )}
                {team.name}
                {team?.items && (
                  <span className='sidebar__menu-avatars'>
                    {team.items.map((user) => {
                      return (
                        <img
                          className='sidebar__menu-avatar'
                          key={`${user.name}_${user.avatar}`}
                          src={user.avatar}
                          alt={user.name}
                        />
                      );
                    })}
                  </span>
                )}
                {team?.counter && (
                  <span className='sidebar__menu-сounter'>{team.counter}</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { SidebarMenu };

import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export type TabsType = {
  name: string;
  path: string;
};

interface TabsProps {
  items: TabsType[];
}

function HeaderTabs({ items }: TabsProps) {
  return (
    <div className='tabs'>
      {items.map((item) => {
        return (
          item?.name && (
            <NavLink
              to={item.path}
              className='tabs__item'
              activeClassName='tabs__item_active'
              key={`${item.name}`}
            >
              {item.name}
            </NavLink>
          )
        );
      })}
    </div>
  );
}

export { HeaderTabs };

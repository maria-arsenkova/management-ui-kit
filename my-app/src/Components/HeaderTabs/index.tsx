import React from 'react';
import './style.css';

export type TapsType = {
  name: string;
};

interface TabsProps {
  items: TapsType[];
}

function HeaderTabs({ items }: TabsProps) {
  return (
    <div className='tabs'>
      {items.map((item) => {
        return (
          item?.name && (
            <a href='/' className='tabs__item'>
              {item.name}
            </a>
          )
        );
      })}
    </div>
  );
}

export default HeaderTabs;

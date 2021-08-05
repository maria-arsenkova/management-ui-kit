import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export type TabsType = {
  name: string;
  path: string;
};

interface TabsProps {
  items: TabsType[];
}

function HeaderTabs({ items }: TabsProps) {
  return (
    <div className="Tabs">
      {items.map((item) => {
        return (
          item?.name && (
            <NavLink
              to={item.path}
              className="Tabs__item"
              activeClassName="Tabs__item_active"
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

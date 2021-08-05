import React from "react";
import "./style.css";
import { UserType } from "../UserInfo/types";
import { UserPhoto, AVATAR_SIZE } from "../UserPhoto";

// type ContentItemType = {
//   name: string;
//   avatar: string;
// };

export type ContentType = {
  name: string;
  // items?: ContentItemType[];
  items?: UserType[];
  counter?: number;
  preview?: string;
};

interface SidebarMenuProps {
  title: string;
  content: ContentType[];
}

function SidebarMenu({ content, title }: SidebarMenuProps) {
  return (
    <div className="sidebar__menu">
      <ul>
        <li className="sidebar__menu-item">
          <p className="sidebar__menu-title">{title}</p>
        </li>
        {content.map((team) => {
          return (
            <li className="sidebar__menu-item" key={`${team.name}`}>
              <a href="/" className="sidebar__menu-link">
                {team?.preview && (
                  <img
                    className="sidebar__menu-preview"
                    key={`${team.preview}_${team.name}`}
                    src={team.preview}
                    alt={team.name}
                  />
                )}
                {team.name}
                {team?.items && (
                  <span className="sidebar__menu-avatars">
                    {team.items.map((user) => {
                      return (
                        user?.avatar && (
                          <span
                            className="sidebar__menu-avatar"
                            key={`${user.initials}_${user.avatar}`}
                          >
                            <UserPhoto user={user} size={AVATAR_SIZE.SMALL} />
                          </span>
                        )
                      );
                    })}
                  </span>
                )}
                {team?.counter && (
                  <span className="sidebar__menu-сounter">{team.counter}</span>
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

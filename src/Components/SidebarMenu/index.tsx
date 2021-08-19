import React from "react";
import "./style.scss";
import { UserType } from "../UserInfo/types";
import { UserPhoto, AVATAR_SIZE } from "../UserPhoto";
import { Icons } from "../Icons";

export type ContentType = {
  name: string;
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
    <div className="SidebarMenu">
      <ul>
        <li className="SidebarMenu__item">
          <p className="SidebarMenu__title">{title}</p>
        </li>
        {content.map((team) => {
          return (
            <li className="SidebarMenu__item" key={`${team.name}`}>
              <a href="/" className="SidebarMenu__link">
                {team?.preview && (
                  <Icons name={"previewProject"}  url={team.preview} key={`${team.preview}_${team.name}`}/>
                )}
                {team.name}
                {team?.items && (
                  <span className="SidebarMenu__avatars">
                    {team.items.map((user) => {
                      return (
                        user?.avatar && (
                          <span
                            className="SidebarMenu__avatar"
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
                  <span className="SidebarMenu__сounter">{team.counter}</span>
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

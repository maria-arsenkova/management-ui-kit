import React from "react";
import "./style.scss";
import { UserType } from "./types";
import { UserPhoto, AVATAR_SIZE } from "../UserPhoto";
import { Icon } from "../Icon";

interface UserInfoProps {
  user: UserType;
}

function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="UserInfo">
      <span className="UserInfo__avatar">
        <UserPhoto user={user} size={AVATAR_SIZE.LARGE} />
      </span>
      <div>
        <div className="UserInfo__initials">{user.initials}</div>
        {user?.position && (
          <div className="UserInfo__position">{user.position}</div>
        )}
      </div>
      <a href="/">
        <Icon name={"circle"} />
      </a>
    </div>
  );
}

export { UserInfo };

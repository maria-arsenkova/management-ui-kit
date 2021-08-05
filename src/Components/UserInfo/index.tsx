import React from "react";
import "./style.scss";
import { UserType } from "./types";
import circle from "./img/circle.svg";
import {UserPhoto, AVATAR_SIZE } from "../UserPhoto"

interface UserInfoProps {
  user: UserType;
}

function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="UserInfo">
      <span className="UserInfo__avatar">
        <UserPhoto user={user} size={AVATAR_SIZE.LARGE}/>
      </span>
      <div>
        <div className="UserInfo__initials">{user.initials}</div>
        {user?.position && (
          <div className="UserInfo__position">{user.position}</div>
        )}
      </div>
      <a href="/" className="circleIcon">
        <img src={circle} alt="circle" />
      </a>
    </div>
  );
}

export { UserInfo };

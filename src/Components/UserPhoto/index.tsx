import React from "react";
import "./style.scss";
import { UserType } from "../UserInfo/types";

export enum AVATAR_SIZE {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
}

interface UserPhotoProps {
  user: UserType;
  size: AVATAR_SIZE;
}

const UserPhoto = ({ user, size }: UserPhotoProps) => {
  let className = "UserPhoto ";
  if (size == AVATAR_SIZE.SMALL) {
    className += "UserPhoto_small";
  } else  if (size == AVATAR_SIZE.MEDIUM) {
    className += "UserPhoto_medium";
  } 
  return <img src={user.avatar} alt={user.initials} className={className} />;
};

export { UserPhoto };

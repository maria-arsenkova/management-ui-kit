import React from "react";
import "./style.scss";
import { HeaderLogo } from "../HeaderLogo";
import { Members } from "../Members";
import userN from "../Members/img/userN.png";
import userTen from "../Members/img/userTen.png";
import userEl from "../Members/img/userEl.png";
import { UserType } from "../UserInfo/types";

const members: UserType[] = [
  { initials: "userN", avatar: userN, position: "Product Owner" },
  { initials: "userTen", avatar: userTen, position: "Product Owner" },
  { initials: "userEl", avatar: userEl, position: "Product Owner" },
];

function HeaderСontent() {
  return (
    <div className="HeaderСontent">
      <HeaderLogo />
      <Members members={members} />
    </div>
  );
}

export { HeaderСontent };

import React from "react";
import "./style.scss";
import { HeaderLogo } from "Components/HeaderLogo";
import { Members } from "Components/Members";
import userN from "Components/Members/img/userN.png";
import userTen from "Components/Members/img/userTen.png";
import userEl from "Components/Members/img/userEl.png";
import { UserType } from "Components/UserInfo/types";

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

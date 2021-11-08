import React from "react";
import "./style.scss";
import { UserType } from "Components/UserInfo/types";
import { Brand } from "Components/Brand";
import { UserInfo } from "Components/UserInfo";
import userpic from "Components/UserInfo/img/user.svg";
import { Stats, StatsType } from "Components/Stats";
import { SidebarMenu, ContentType } from "Components/SidebarMenu";
import dashboard from "Components/SidebarMenu/img/dashboard.svg";
import crm from "Components/SidebarMenu/img/crm.svg";
import website from "Components/SidebarMenu/img/website.svg";
import communication from "Components/SidebarMenu/img/communication.svg";
import userZ from "Components/SidebarMenu/img/userZ.png";
import userO from "Components/SidebarMenu/img/userO.png";
import userT from "Components/SidebarMenu/img/userT.png";
import userF from "Components/SidebarMenu/img/userF.png";
import userFo from "Components/SidebarMenu/img/userFo.png";
import userFa from "Components/SidebarMenu/img/userFa.png";
import userSi from "Components/SidebarMenu/img/userSi.png";
import userSe from "Components/SidebarMenu/img/userSe.png";
import userEt from "Components/SidebarMenu/img/userEt.png";
import { SidebarFooter } from "../SidebarFooter";
import { Button, BUTTON_VARIABLE, BUTTON_TEXT } from "../Button";

export const user: UserType = {
  avatar: userpic,
  initials: "Emilee Simchenko",
  position: "Product Owner",
};

const tasks: StatsType[] = [
  { name: "Completed Tasks", counter: 372 },
  { name: "Open Tasks", counter: 11 },
];

const menu: ContentType[] = [
  { name: "Home" },
  { name: "My Tasks" },
  { name: "Notifications", counter: 3 },
];

const projects: ContentType[] = [
  {
    name: "Dashboard UI Kit",
    preview: dashboard,
  },
  {
    name: "CRM System",
    preview: crm,
  },
  {
    name: "Website Redesign",
    preview: website,
  },
  {
    name: "Communication Tool",
    preview: communication,
  },
];

const teams: ContentType[] = [
  {
    name: "Designers",
    items: [
      { initials: "userZ", avatar: userZ, position: "userZ" },
      { initials: "userO", avatar: userO, position: "userO" },
      { initials: "userT", avatar: userT, position: "userT" },
    ],
  },
  {
    name: "Backend",
    items: [
      { initials: "userF", avatar: userF, position: "userF" },
      { initials: "userFo", avatar: userFo, position: "userFo" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { initials: "userFa", avatar: userFa, position: "userFa" },
      { initials: "userSi", avatar: userSi, position: "userSi" },
      { initials: "userSe", avatar: userSe, position: "userSe" },
      { initials: "userEt", avatar: userEt, position: "userEt" },
    ],
  },
];

function Sidebar() {
  return (
    <div className="Sidebar">
      <Brand />
      <UserInfo user={user} />
      <Stats tasks={tasks} />
      <SidebarMenu title={"menu"} content={menu} />
      <SidebarMenu title={"projects"} content={projects} />
      <div className="Sidebar__add-new-section">
        <Button variable={BUTTON_VARIABLE.TRANSPARENT}  text={BUTTON_TEXT.WARNING} onClick={() => {}}>
          + Add a Project
        </Button>
      </div>
      <SidebarMenu title={"teams"} content={teams} />
      <div className="Sidebar__add-new-section">
        <Button variable={BUTTON_VARIABLE.TRANSPARENT} text={BUTTON_TEXT.WARNING} onClick={() => {}}>
          + Add a Team
        </Button>
      </div>
      <SidebarFooter />
    </div>
  );
}

export { Sidebar };

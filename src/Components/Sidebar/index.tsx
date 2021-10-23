import React from "react";
import "./style.scss";
import { UserType } from "../UserInfo/types";
import { Brand } from "../Brand";
import { UserInfo } from "../UserInfo";
import userpic from "../UserInfo/img/user.svg";
import { Stats, StatsType } from "../Stats";
import { SidebarMenu, ContentType } from "../SidebarMenu";
import dashboard from "../SidebarMenu/img/dashboard.svg";
import crm from "../SidebarMenu/img/crm.svg";
import website from "../SidebarMenu/img/website.svg";
import communication from "../SidebarMenu/img/communication.svg";
import userZ from "../SidebarMenu/img/userZ.png";
import userO from "../SidebarMenu/img/userO.png";
import userT from "../SidebarMenu/img/userT.png";
import userF from "../SidebarMenu/img/userF.png";
import userFo from "../SidebarMenu/img/userFo.png";
import userFa from "../SidebarMenu/img/userFa.png";
import userSi from "../SidebarMenu/img/userSi.png";
import userSe from "../SidebarMenu/img/userSe.png";
import userEt from "../SidebarMenu/img/userEt.png";
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

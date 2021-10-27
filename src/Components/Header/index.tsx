import React from "react";
import "./style.scss";
import { HeaderСontent } from "../HeaderСontent";
import { HeaderTabs, TabsType } from "../HeaderTabs";

const navbar: TabsType[] = [
  { name: "Tasks", path: "/tasks" },
  { name: "Files", path: "/files" },
  { name: "Kanban", path: "/kanban" },
  { name: "Activity", path: "/activity" },
  { name: "Calendar", path: "/calendar" },
];

function Header() {
  return (
    <div className="Header">
      <HeaderСontent />
      <HeaderTabs items={navbar} />
    </div>
  );
}

export { Header };

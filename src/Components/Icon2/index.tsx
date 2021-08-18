import React from "react";
import "./style.scss";
import logoWeb from "./img/logoWeb.svg";
import list from "./img/list.svg";
import search from "./img/search.svg";
import circle from "./img/circle.svg";
import chat from "./img/chat.svg";
import addIcon from "./img/addIcon.svg";

interface IconProps {
  name: string;
  url?: string;
}

const Icon2 = ({ name, url }: IconProps): JSX.Element => {
  let className = "Icon ";
  let scr = "";

  switch (true) {
    case name == "list":
      scr = list;
      break;

    case name == "search":
      scr = search;
      break;

    case name == "circle":
      scr = circle;
      break;

    case name == "logoWeb":
      scr = logoWeb;
      break;

    case name == "previewProject":
      scr += { url };
      break;

    case name == "chat":
      scr = chat;
      break;

    case name == "addIcon":
      scr = addIcon;
      break;
  }
  return <img src={scr} alt={name} className={className}></img>;
};

export { Icon2 };

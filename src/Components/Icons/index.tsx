import React from "react";
import "./style.scss";
import logoWeb from "./img/logoWeb.svg";
import list from "./img/list.svg";
import search from "./img/search.svg";
import circle from "./img/circle.svg";
import chat from "./img/chat.svg";
import add from "./img/add.svg";
import download from "./img/download.svg";

interface IconsProps {
  name: string;
  url?: string;
}

const Icons = ({ name, url }: IconsProps): JSX.Element => {
  let className = "Icon ";
  let scr ;

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
      scr = url;
      className= "Icon__preview-project "
      break;

    case name == "chat":
      scr = chat;
      break;

    case name == "add":
      scr = add;
      break;

    case name == "download":
      scr = download;
      break;
  }
  return <img src={scr} alt={name} className={className}></img>;
};

export { Icons };

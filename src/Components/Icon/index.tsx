import React from "react";
import "./style.scss";
import logoWeb from "./img/logoWeb.svg";
import list from "./img/list.svg";
import search from "./img/search.svg";
import searchBlack from "./img/searchBlack.svg";
import circle from "./img/circle.svg";
import chat from "./img/chat.svg";
import add from "./img/add.svg";
import download from "./img/download.svg";
import downloadCloud from "./img/downloadCloud.svg";
import deleteIcon from "./img/delete.svg";
import arrow from "./img/arrow.svg";

export enum ICON_SIZE {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum ICON_TRANSPARENCY {
  HALF = "HALF",
}

interface IconProps {
  size?: ICON_SIZE;
  transparency?: ICON_TRANSPARENCY;
  name: string;
  url?: string;
}

const Icon = ({ name, url, size, transparency }: IconProps): JSX.Element => {
  let className = "Icon ";
  let scr;

  switch (size) {
    case ICON_SIZE.SMALL:
      className += "Icon_small ";
      break;

    case ICON_SIZE.MEDIUM:
      className += "Icon_medium ";
      break;

    case ICON_SIZE.LARGE:
      className += "Icon_large ";
      break;
  }

  switch (transparency) {
    case ICON_TRANSPARENCY.HALF:
      className += "Icon_half ";
      break;
  }

  switch (name) {
    case "list":
      scr = list;
      break;

    case "search":
      scr = search;
      break;

    case "searchBlack":
      scr = searchBlack;
      break;

    case "circle":
      scr = circle;
      break;

    case "logoWeb":
      scr = logoWeb;
      break;

    case "previewProject":
      scr = url;
      break;

    case "chat":
      scr = chat;
      break;

    case "add":
      scr = add;
      break;

    case "download":
      scr = download;
      break;

    case "delete":
      scr = deleteIcon;
      break;

    case "downloadCloud":
      scr = downloadCloud;
      break;

    case "arrowUp":
      scr = arrow;
      className += "Icon__arrowUp ";
      break;

    case "arrowDown":
      scr = arrow;
      break;
  }
  return <img src={scr} alt={name} className={className}/>;
};

export { Icon };

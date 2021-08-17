import React from "react";
import "./style.scss";
import list from "./img/list.svg";
import search from "./img/search.svg";
import circle from "./img/circle.svg";

interface IconProps {
  name: string;
}

const Icon2 = ({ name }: IconProps): JSX.Element => {
  let className = "Icon ";
  let scr = list;

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
  }
  return <img src={scr} alt={name} className={className}></img>;
};

export { Icon2 };

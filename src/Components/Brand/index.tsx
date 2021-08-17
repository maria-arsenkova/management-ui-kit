import React from "react";
import "./style.scss";
import { Icon2 } from "../Icon2";

function Brand() {
  return (
    <div className="Brand">
      <a href="/" className='Brand__icon-list'>
        <Icon2 name={"list"} />
      </a>
      <span className="Brand__name">PROJECTUS</span>
      <a href="/" className="Brand__icon-search">
        <Icon2 name={"search"} />
      </a>
    </div>
  );
}

export { Brand };

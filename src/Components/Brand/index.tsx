import React from "react";
import "./style.scss";
import { Icons } from "../Icons";

function Brand() {
  return (
    <div className="Brand">
      <a href="/" className='Brand__icon-list'>
        <Icons name={"list"} />
      </a>
      <span className="Brand__name">PROJECTUS</span>
      <a href="/" className="Brand__icon-search">
        <Icons name={"search"} />
      </a>
    </div>
  );
}

export { Brand };

import React from "react";
import "./style.scss";
import { Icon } from "Components/Icon";

function Brand() {
  return (
    <div className="Brand">
      <a href="/" className='Brand__icon-list'>
        <Icon name={"list"} />
      </a>
      <span className="Brand__name">PROJECTUS</span>
      <a href="/" className="Brand__icon-search">
        <Icon name={"search"} />
      </a>
    </div>
  );
}

export { Brand };

import React from "react";
import "./style.scss";
import { Icon2 } from "../Icon2";

function HeaderLogo() {
  return (
    <div className="HeaderLogo">
      <a href="/" className="HeaderLogo__item">
        <Icon2 name={"logoWeb"} />
        <span className="HeaderLogo__name">Website</span>
      </a>
      <span className="HeaderLogo__icon">
        <Icon2 name={"circle"} />
      </span>
    </div>
  );
}

export { HeaderLogo };

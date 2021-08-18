import React from "react";
import "./style.scss";
import { Icons } from "../Icons";

function HeaderLogo() {
  return (
    <div className="HeaderLogo">
      <a href="/" className="HeaderLogo__item">
        <Icons name={"logoWeb"} />
        <span className="HeaderLogo__name">Website</span>
      </a>
      <span className="HeaderLogo__icon">
        <Icons name={"circle"} />
      </span>
    </div>
  );
}

export { HeaderLogo };

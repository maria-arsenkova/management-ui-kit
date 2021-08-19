import React from "react";
import "./style.scss";
import { Icons } from "../Icons";
import { Circle, CIRCLE_SIZE, CIRCLE_VARIABLE } from "../Сircle";

function HeaderLogo() {
  return (
    <div className="HeaderLogo">
      <a href="/" className="HeaderLogo__item">
        <Icons name={"logoWeb"} />
        <span className="HeaderLogo__name">Website</span>
      </a>
      <Circle size={CIRCLE_SIZE.MEDIUM} variable={CIRCLE_VARIABLE.DEFAULT}>
        <Icons name={"circle"} />
      </Circle>
    </div>
  );
}

export { HeaderLogo };

import React from "react";
import "./style.scss";
import { Icon } from "../Icon";
import { Circle, CIRCLE_SIZE, CIRCLE_VARIABLE } from "../Сircle";

function HeaderLogo() {
  return (
    <div className="HeaderLogo">
      <a href="/" className="HeaderLogo__item">
        <Icon name={"logoWeb"} />
        <span className="HeaderLogo__name">Website</span>
      </a>
      <Circle size={CIRCLE_SIZE.MEDIUM} variable={CIRCLE_VARIABLE.DEFAULT}>
        <Icon name={"circle"} />
      </Circle>
    </div>
  );
}

export { HeaderLogo };

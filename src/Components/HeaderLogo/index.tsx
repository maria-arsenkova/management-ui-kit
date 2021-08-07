import React from "react";
import "./style.scss";
import logoWeb from "./img/logoWeb.svg";
import circle from "./img/circle.svg";

function HeaderLogo() {
  return (
    <div className="HeaderLogo">
      <a href="/" className="HeaderLogo__item">
        <img src={logoWeb} alt="logo" />
        <span className="HeaderLogo__name">Website</span>
      </a>
      <span className="HeaderLogo__icon">
        <img src={circle} alt="circle" />
      </span>
    </div>
  );
}

export { HeaderLogo };

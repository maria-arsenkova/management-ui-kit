import React from "react";
import "./style.scss";
import arrow from "./img/arrow.svg";

export enum ARROW_DIRECTION {
  UP = "UP",
  DOWN = "DOWN",
}

type IconArrowType = {
  derection: ARROW_DIRECTION;
};

const IconArrow = ({ derection }: IconArrowType) => {
  let className = "";
  if (derection == ARROW_DIRECTION.UP) {
    className += "IconArrow__up";
  } else if (derection == ARROW_DIRECTION.DOWN) {
    className += "";
  }
  return <img alt="IconArrow" src={arrow} className={className} />;
};

export { IconArrow };

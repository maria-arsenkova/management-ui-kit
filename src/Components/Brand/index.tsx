import React from "react";
import "./style.scss";
import list from "./img/list.svg";
import {Search} from '../Search'

function Brand() {
  return (
    <div className="Brand">
      <a href="/">
        <img src={list} alt="list" className="Brand__icon-list"></img>
      </a>
      <span className="Brand__name">PROJECTUS</span>
      <a href="/" className="Brand__icon-search">
       <Search />
      </a>
    </div>
  );
}

export { Brand };

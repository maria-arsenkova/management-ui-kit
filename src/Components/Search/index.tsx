import React from "react";
import search from "./img/search.svg";
import "./style.scss";

const Search = (): JSX.Element => {
  return <img src={search} alt="search" className="SearchIcon"/>;
};

export { Search };

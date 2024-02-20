import React from "react";
import style from "./style.module.css";
import searchIcon from "../../assets/magnifying-glass-solid.svg";

const Search = ({ search, setSearch }) => {
  const searchIconStyle = {
    backgroundImage: `url(${searchIcon})`,
    backgroundSize: "5%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <div>
        <input
          style={searchIconStyle}
          className={style.search}
          placeholder="Search your trip"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </div>
  );
};

export default Search;

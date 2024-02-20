import React, { useState } from "react";
import Search from "../search/search";
import Trips from "../trips/trips";
import WeatherBar from "../weatherBar/weatherBar";

const Content = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <Search search={search} setSearch={setSearch} />
        <Trips search={search} />
      </div>
      <WeatherBar />
    </div>
  );
};

export default Content;

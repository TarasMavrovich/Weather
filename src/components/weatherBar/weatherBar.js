import React from "react";
import style from "./style.module.css";

const WeatherBar = () => {
  return (
    <div className={style.container}>
      <h1>Sunday</h1>
      <div className={style.center}>
        <div className={style.center_img}>
          <img src="https://via.placeholder.com/40x40.png" alt="" />
          <div>24*C</div>
        </div>
        <div className={style.city}>Berlin</div>
      </div>
      <div className={style.list}>
        <ul>
          <li>30</li>
          <li>DAYS</li>
        </ul>
        <ul>
          <li>15</li>
          <li>HOURS</li>
        </ul>
        <ul>
          <li>30</li>
          <li>MINUTES</li>
        </ul>
        <ul>
          <li>10</li>
          <li>SECONDS</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherBar;

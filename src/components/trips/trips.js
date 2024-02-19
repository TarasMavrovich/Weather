import React, { useEffect, useState } from "react";
import Trip from "../trip/trip";
import { checkWeather } from "../../api/api";
import CreateTrip from "../modals/CreateTrip";
import style from "./style.module.css";

const Trips = ({ search }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [tripVisible, setTripVisible] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await checkWeather();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div className={style.container}>
      {weatherData && <Trip data={weatherData} />}
      {weatherData && <Trip data={weatherData} />}
      <button onClick={() => setTripVisible(true)}>+ Add trip</button>
      <CreateTrip show={tripVisible} onHide={() => setTripVisible(false)} />
    </div>
  );
};

export default Trips;

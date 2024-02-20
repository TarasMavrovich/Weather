import React, { useEffect, useState } from "react";
import Trip from "../trip/trip";
import { checkWeather } from "../../api/api";
import CreateTrip from "../modals/CreateTrip";
import style from "./style.module.css";

const Trips = ({ search }) => {
  const [trips, setTrips] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [tripVisible, setTripVisible] = useState(false);

  const handleAddTrip = (newTrip) => {
    if (newTrip && newTrip.destination && newTrip.startDate && newTrip.endDate)
      setTrips((prevTrips) => [...prevTrips, newTrip]);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (trips.length > 0) {
          const { destination, startDate, endDate } = trips[0];
          const data = await checkWeather(destination, startDate, endDate);
          setWeatherData(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    fetchWeatherData();
  }, [trips]);

  console.log(weatherData);
  console.log(trips);

  return (
    <div className={style.container}>
      <div className={style.trips}>
        <div className={style.trip}>
          {trips.map((trip) => (
            <Trip key={trip.id} tripData={trip} />
          ))}
        </div>
        <button className={style.button} onClick={() => setTripVisible(true)}>
          <div style={{ fontSize: "20px" }}>+</div>
          <div>Add trip</div>
        </button>
        <CreateTrip
          show={tripVisible}
          onHide={() => setTripVisible(false)}
          onAddTrip={handleAddTrip}
        />
      </div>
    </div>
  );
};

export default Trips;

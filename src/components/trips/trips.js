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
    const updateTrips = [...trips, newTrip];
    setTrips(updateTrips);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (trips.length > 0) {
          const { destination, startDate, endDate } = trips[0];
          const data = await checkWeather(destination, startDate, endDate);
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    fetchWeatherData();
  }, [trips]);

  return (
    <div className={style.container}>
      <div>
        {trips.map((trip) => (
          <Trip key={trip.id} tripData={trip} />
        ))}
        <button onClick={() => setTripVisible(true)}>+ Add trip</button>
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

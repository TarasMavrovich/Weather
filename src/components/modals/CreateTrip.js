import React, { useState } from "react";
import style from "./style.module.css";

const CreateTrip = ({ show, onHide }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleAddClick = () => {
    const newTrip = {
      id: Date.now(),
      destination: selectedCity,
      startDate,
      endDate,
    };
    console.log(newTrip);
    onHide();
    // onAddTrip(newTrip)
  };

  const cities = ["City1", "City2", "City3"];

  return (
    <>
      {show && (
        <div className={style.container}>
          <header className={style.header}>
            <div className={style.create_trip}>Create trip</div>
            <button className={style.button} onClick={onHide}>
              X
            </button>
          </header>

          <div className={style.main}>
            <div className={style.trip}>
              <div>
                <span>*</span>
                City
              </div>
              <select value={selectedCity} onChange={handleCityChange}>
                <option value="">Please select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className={style.trip}>
              <div>
                <span>*</span>
                Start date
              </div>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                placeholder="Select date"
              />
            </div>

            <div className={style.trip}>
              <div>
                <span>*</span>
                End date
              </div>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>

          <div className={style.button_container}>
            <button className={style.cancel_btn} onClick={onHide}>
              Cancel
            </button>
            <button className={style.save_btn} onClick={handleAddClick}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTrip;

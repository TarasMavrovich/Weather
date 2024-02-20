import React, { useState } from "react";
import style from "./style.module.css";

const CreateTrip = ({ show, onHide, onAddTrip }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setValidationErrors((prevErrors) => ({ ...prevErrors, city: "" }));
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setValidationErrors((prevErrors) => ({ ...prevErrors, startDate: "" }));
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    setValidationErrors((prevErrors) => ({ ...prevErrors, endDate: "" }));
  };

  const handleAddClick = () => {
    const errors = {};
    if (!selectedCity) {
      errors.city = "City is required";
    }
    if (!startDate) {
      errors.startDate = "Start date is required";
    }
    if (!endDate) {
      errors.endDate = "End date is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const newTrip = {
      id: Date.now(),
      destination: selectedCity,
      startDate,
      endDate,
    };
    onAddTrip(newTrip);
    setValidationErrors({});
    onHide();
  };

  const cities = ["Tokyo", "Kyiv", "City3"];

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
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className={validationErrors.city && style.inputError}
              >
                <option value="">Please select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {validationErrors.city && (
                <div className={style.error}>{validationErrors.city}</div>
              )}
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
                className={validationErrors.startDate && style.inputError}
              />
              {validationErrors.startDate && (
                <div className={style.error}>{validationErrors.startDate}</div>
              )}
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
                className={validationErrors.endDate && style.inputError}
              />
              {validationErrors.endDate && (
                <div className={style.error}>{validationErrors.endDate}</div>
              )}
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

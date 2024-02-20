const Trip = ({ data, handleClickOneTrip }) => {
  if (!data) {
    return null;
  }
  const { destination, startDate, endDate } = data;

  return (
    <div onClick={handleClickOneTrip}>
      <img src="https://via.placeholder.com/150x150.png" alt={destination} />
      <div>
        <div>{destination}</div>
        <div>
          {startDate} - {endDate}
        </div>
      </div>
    </div>
  );
};

export default Trip;

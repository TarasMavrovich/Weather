import style from "./style.module.css";

const Trip = ({ tripData }) => {
  if (!tripData) {
    return null;
  }
  const { destination, startDate, endDate } = tripData;

  return (
    <div className={style.container} onClick={(e) => console.log(e.target)}>
      <img
        src="https://via.placeholder.com/150x150.png"
        alt={destination}
        className={style.img}
      />
      <div className={style.description}>
        <div className={style.name}>{destination}</div>
        <div className={style.date}>
          {startDate} - {endDate}
        </div>
      </div>
    </div>
  );
};

export default Trip;

import React from "react";

const Trip = ({ data }) => {
  const lastDay =
    data.days && data.days.length > 0 ? data.days.at(-1).datetime : "";

  return (
    <div>
      <img
        src="https://via.placeholder.com/150x150.png"
        alt={data.resolvedAddress}
      />
      <div>
        <div>{data.address}</div>
        <div>
          {data.days[0].datetime} - {lastDay}
        </div>
      </div>
    </div>
  );
};

export default Trip;
